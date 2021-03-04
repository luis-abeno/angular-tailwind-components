import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit
} from '@angular/core';
import { I2TabsItemComponent } from '../i2-tabs-item/i2-tabs-item.component';

@Component({
  selector: 'i2-tabs',
  templateUrl: './i2-tabs.component.html',
  styleUrls: ['./i2-tabs.component.scss'],
})
export class I2TabsComponent implements AfterContentInit {

  @ContentChildren(I2TabsItemComponent) tabs!: QueryList<I2TabsItemComponent>;

  ngAfterContentInit() {
    let activeTabs = this.tabs.filter((tab) => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: any) {
    this.tabs.toArray().forEach(tab => tab.active = false);

    tab.active = true;
  }
}
