import { Component, OnInit } from '@angular/core';
import { I2ToasterService } from '../service/i2-toaster.service';
import { I2ToasterOptions } from "../model/i2-toaster.model";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'i2-toaster',
  templateUrl: './i2-toaster.component.html',
  styleUrls: ['./i2-toaster.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
      })),
      transition('open => closed', [
        animate('2s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class I2ToasterComponent implements OnInit {
  isOpen = true;
  toaster!: I2ToasterOptions;

  constructor(
    private _toasterService: I2ToasterService
  ) { }

  ngOnInit(): void {
    // Update service position Y, so the next added is going to have a 3 rem from top
    this._toasterService.posY = this._toasterService.posY + 3;

    // Handle toaster provided options
    this.toaster = this._toasterService.toasterOptions;

    // After 3 seconds remove toaster and then update position Y, so the next toaster is attached bellow
    setTimeout(() => {
      this.isOpen = !this.isOpen;
      this._toasterService.posY = this._toasterService.posY - 3;
    }, 3000);
  }

}
