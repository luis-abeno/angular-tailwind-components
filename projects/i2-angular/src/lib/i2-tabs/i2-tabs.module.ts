import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I2TabsComponent } from './component/i2-tabs/i2-tabs.component';
import { I2TabsItemComponent } from './component/i2-tabs-item/i2-tabs-item.component';

@NgModule({
  declarations: [I2TabsComponent, I2TabsItemComponent],
  exports: [I2TabsComponent, I2TabsItemComponent],
  imports: [
    CommonModule
  ]
})
export class I2TabsModule { }
