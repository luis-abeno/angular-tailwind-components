import { Component } from '@angular/core';
import { I2ToasterService, I2DrawerService } from 'i2-angular';

@Component({
    selector: 'app-test',
    template: `
        <h1>Hello</h1>
    `,
    styles: [
        'h1 { font-weight: bold; }'
    ]
})
export class TestComponent {
    title = 'i2-angular-components';

    constructor(
        private _i2Toaster: I2ToasterService,
        private _drawerService: I2DrawerService
    ) {

    }
}
