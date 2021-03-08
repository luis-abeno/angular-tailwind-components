import { Component } from '@angular/core';
import { I2ToasterService, I2DrawerService } from 'i2-angular';
import { TestComponent } from './test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'i2-angular-components';

  constructor(
    private _i2Toaster: I2ToasterService,
    private _drawerService: I2DrawerService
  ) {

  }

  showToast() {
    this._i2Toaster.show(
      {
        type: 'danger',
        message: 'Parabéns! Usuário removido com sucesso!',
        direction: 'bottom-right'
      }
    );
  }

  openDrawer() {
    this._drawerService.show({
      title: {
        text: 'asd',
        size: 'md',
      },
      size: 'md',
      content: TestComponent
    })
  }
}
