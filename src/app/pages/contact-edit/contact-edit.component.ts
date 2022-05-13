import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserMsgService } from 'src/app/services/user-msg.service';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss'],
})
export class ContactEditComponent implements OnInit {
  constructor(
    private contactService: ContactService,
    private userMsgService: UserMsgService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  contact: Contact;

  ngOnInit(): void {
    this.route.data.subscribe(({ contact }) => {
      this.contact = contact
        ? contact
        : (this.contactService.getEmptyContact() as Contact);
    });
  }

  onSaveContact() {
    this.contactService.saveContact({ ...this.contact });
    this.contact._id
      ? this.userMsgService.setMsg(
          `${this.contact.name} has been edited successfully`
        )
      : this.userMsgService.setMsg(
          `${this.contact.name} has been added successfully`
        );
    this.contact._id
      ? this.router.navigateByUrl(`contact/${this.contact._id}`)
      : this.router.navigateByUrl('contact');
  }

  onRemoveContact(contactId: string, contactName: string) {
    this.contactService.deleteContact(contactId);
    this.userMsgService.setMsg(`${contactName} has been removed successfully`);
    this.router.navigateByUrl('contact');
  }

  onBack() {
    this.contact._id
      ? this.router.navigateByUrl(`contact/${this.contact._id}`)
      : this.router.navigateByUrl('contact');
  }
}
