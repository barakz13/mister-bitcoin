import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Contact } from 'src/app/models/contact.model';

export const SET_CONTACTS = '[CONTACT] Set';

export class SetContacts implements Action {
  readonly type = SET_CONTACTS;

  constructor(public payload: Contact[]) {}
}

export type Actions = SetContacts;
