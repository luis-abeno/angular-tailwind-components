import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I2ToasterComponent } from './component/i2-toaster.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [I2ToasterComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [I2ToasterComponent]
})
export class I2ToasterModule { }
