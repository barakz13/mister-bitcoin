import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserMsgService } from 'src/app/services/user-msg.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit {
  constructor(
    private userService: UserService,
    private userMsgService: UserMsgService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  contact: Contact;
  user: User;
  amount: number;

  async ngOnInit() {
    this.user = this.userService.getUser();
    this.route.data.subscribe((data) => {
      this.contact = data.contact;
    });
  }

  async onTransferCoins(ev: number) {
    this.amount = ev;
    if (this.amount <= 0 || !this.amount) {
      alert('Please enter a valid number');
      return;
    }
    try {
      this.userService.addMove(this.contact, this.amount);
      this.userMsgService.setMsg(
        `${this.amount} coins have been successfully Transferred to ${this.contact.name}`
      );
      this.user = this.userService.getUser();
    } catch (err) {
      alert(err);
    }
  }

  onBack() {
    this.router.navigateByUrl('contact');
  }
}
