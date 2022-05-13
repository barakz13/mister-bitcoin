import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0, opacity: 0 }),
        animate('1s ease-out', style({ height: 1000, opacity: 1 })),
      ]),
      transition(':leave', [
        style({ height: 1000, opacity: 1 }),
        animate('1s ease-in', style({ height: 0, opacity: 0 })),
      ]),
    ]),
  ],
})
export class AppHeaderComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef) {}
  menuStatus: string = 'regular';
  isMenuOn: boolean = false;

  ngOnInit(): void {
    this.updateMenu();
    window.onresize = this.updateMenu;
  }

  updateMenu = () => {
    var width = window.innerWidth;
    if (width <= 700) this.menuStatus = 'hamburger';
    else {
      this.menuStatus = 'regular';
      this.isMenuOn = false;
    }
    this.cdr.detectChanges();
  };
  toggleMenu() {
    if (window.innerWidth > 700) return;
    if (this.menuStatus === 'regular') this.menuStatus = 'hamburger';
    else this.menuStatus = 'regular';
    this.isMenuOn = !this.isMenuOn;
  }
}
