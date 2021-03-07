import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { I2DrawerOptions } from '../../model/i2-drawer.model';
import { I2DrawerService } from '../../service/i2-drawer.service';

@Component({
  selector: 'i2-drawer',
  templateUrl: './i2-drawer.component.html',
  styleUrls: ['./i2-drawer.component.scss'],
  animations: [
    trigger('slideIn', [
      state('*', style({
        transform: 'translateX(100%)',
      })),
      state('in', style({
        transform: 'translateX(0)',
      })),
      state('out', style({
        transform: 'translateX(100%)',
      })),
      transition('* => in', animate('600ms ease-in')),
      transition('in => out', animate('600ms ease-in'))
    ])
  ],
})
export class I2DrawerComponent implements OnInit {
  slideInState = 'in'
  drawer!: I2DrawerOptions;

  constructor(
    private _drawerService: I2DrawerService
  ) { }

  ngOnInit(): void {
    this.drawer = this._drawerService.drawerOptions;
  }

  close() {
    this.slideInState = 'out';
    setTimeout(() => {
      this._drawerService.close();
    }, 700);
  }
}
