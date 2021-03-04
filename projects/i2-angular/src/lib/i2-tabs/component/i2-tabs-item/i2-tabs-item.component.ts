import { Component, Input } from '@angular/core';

@Component({
  selector: 'i2-tabs-item',
  templateUrl: './i2-tabs-item.component.html',
  styleUrls: ['./i2-tabs-item.component.scss'],
})
export class I2TabsItemComponent {
  @Input('tabTitle') title!: string;
  @Input() active = false;
}
