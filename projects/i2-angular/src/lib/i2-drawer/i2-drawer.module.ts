import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I2DrawerComponent } from './components/i2-drawer/i2-drawer.component';
import { DRAWER_TOKEN } from './injection-token';


@NgModule({
  declarations: [I2DrawerComponent],
  imports: [
    CommonModule
  ],
  exports: [I2DrawerComponent],
  providers: [
    { provide: DRAWER_TOKEN, useValue: I2DrawerComponent }
  ]
})
export class I2DrawerModule { }
