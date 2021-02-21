import { Component } from '@angular/core';
import { I2ToasterService } from 'i2-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'i2-angular-components';

  constructor(
    private _i2Toaster: I2ToasterService
  ) {

  }

  showToast() {
    this._i2Toaster.show(
      {
        type: 'danger',
        message: 'Parabéns! Usuário removido com sucesso!'
      }
    );
  }
}
