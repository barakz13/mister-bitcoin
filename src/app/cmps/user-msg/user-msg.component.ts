import { Component, OnInit } from '@angular/core';
import { UserMsgService } from 'src/app/services/user-msg.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'user-msg',
  templateUrl: './user-msg.component.html',
  styleUrls: ['./user-msg.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('1s ease-out', style({ height: 300, opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: 300, opacity: 1 }),
        animate('1s ease-in', style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class UserMsgComponent implements OnInit {
  constructor(private userMsgService: UserMsgService) {}

  msg = '';

  ngOnInit(): void {
    this.userMsgService.msg$.subscribe((msg) => {
      this.msg = msg;
    });
  }
}
