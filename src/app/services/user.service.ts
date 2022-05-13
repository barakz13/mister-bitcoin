import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';
import { Move } from '../models/move.model';
import { User } from '../models/user.model';
import { StorageService } from './storage.service';

const USER_KEY: string = 'currUser';

// const USER = {
//   name: 'Barak Levav',
//   coins: 100,
//   moves: [],
// };
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private storageService: StorageService) {}

  public getUser() {
    let user = this._getLocalUser();
    return user;
  }
  public addMove(contact: Contact, amount: number) {
    let user = this.getUser();
    if (amount > user.coins) throw Error('Insufficient funds');
    const newMove: Move = {
      toId: contact._id,
      to: contact.name,
      at: Date.now(),
      amount,
    };
    user.moves.unshift(newMove);
    user.coins -= amount;
    this._saveLocalUser(user);
  }

  public isLoggedIn() {
    const user = this._getLocalUser();
    return user ? true : false;
  }

  public signup(name: string) {
    const user = {
      name,
      coins: 100,
      moves: [],
    };
    this._saveLocalUser(user);
  }

  private _saveLocalUser(user: User) {
    this.storageService.store(USER_KEY, user);
  }

  private _getLocalUser() {
    return this.storageService.load(USER_KEY);
  }
}
