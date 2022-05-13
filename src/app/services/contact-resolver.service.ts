import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Contact } from '../models/contact.model';
import { ContactService } from './contact.service';

@Injectable({
  providedIn: 'root',
})
export class ContactResolverService
  implements Resolve<Promise<Contact | void>>
{
  constructor(private contactService: ContactService) {}

  public async resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params;
    if (id) {
      const contact = await lastValueFrom(
        this.contactService.getContactById(id)
      );
      return contact;
    } else {
      const contacts = this.contactService.loadContacts(null);
      return contacts;
    }
  }
}
