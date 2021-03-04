import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { I2ToasterModule, I2TabsModule } from 'i2-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    I2ToasterModule,
    I2TabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
