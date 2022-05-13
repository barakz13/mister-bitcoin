import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Contact } from 'src/app/models/contact.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss'],
})
export class TransferFundComponent implements OnInit {
  constructor(private userService: UserService) {}
  amount: number;
  @Input() contact: Contact;
  @Input() maxCoins: number;
  @Output() submittedAmount = new EventEmitter<number>();

  ngOnInit(): void {}

  onSubmitAmount(form: NgForm) {
    this.submittedAmount.emit(this.amount);
    form.reset();
  }
}
