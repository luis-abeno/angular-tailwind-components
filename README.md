# I2 Angular Components
Description

# Dependencies

# About

# Components

### Toaster
Import into your module
`
import { I2ToasterModule } from 'i2-angular';
`

Then use in component
`
import { I2ToasterService } from 'i2-angular';
...
showToast() {
    this._i2Toaster.show(
      {
        type: 'danger',
        message: 'Woops, something goes wrong. '
      }
    );
  }
`

Options
Model I2ToasterOptions
type (required): 'warning' | 'success' | 'danger' | 'info';
message (required): string;
