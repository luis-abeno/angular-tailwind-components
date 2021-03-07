import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { I2ToasterModule, I2TabsModule, I2DrawerModule } from 'i2-angular';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    I2ToasterModule,
    I2TabsModule,
    I2DrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
