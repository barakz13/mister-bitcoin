import { Component, Input, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.model';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute
  ) {}
  contacts$!: Observable<Contact[]>;

  ngOnInit(): void {
    this.contacts$ = this.contactService.contacts$;
  }
}
