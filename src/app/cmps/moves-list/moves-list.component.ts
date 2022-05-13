import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Move } from 'src/app/models/move.model';

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss'],
})
export class MovesListComponent implements OnInit, OnChanges {
  constructor() {}
  ngOnChanges() {
    this.ngOnInit();
  }
  @Input() title: string;
  @Input() movesList: Move[];
  @Input() contactId: string;
  movesForDisplay: Move[];
  movesFixDates: Move[];

  ngOnInit(): void {
    this.setMovesForDisplay();
  }

  setMovesForDisplay() {
    if (this.contactId) {
      this.movesForDisplay = this.movesList.filter(
        (move) => move.toId === this.contactId
      );
    } else {
      this.movesForDisplay = this.movesList;
      if (this.movesForDisplay.length > 3) {
        this.movesForDisplay = this.movesForDisplay.slice(0, 3);
      }
    }
  }
}
