# I2 Angular Components
Description

# Dependencies
This project depends on Tailwindcss (https://tailwindcss.com/) as peer dependencies.

# About

# How to run
Just clone the repo and run npm i.  
It's a workspace that contains the library, the main project is used to test the components.  

To build library run the command bellow inside project/i2-angular folder  

```javascript
npm run build
```

After that just serve the main application.  

# Components

<details><summary>Toaster</summary>
<p>

#### Import into your module

```typescript
import { I2ToasterModule } from 'i2-angular';
```

#### Also some angular modules
```typescript
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
```

</p>

<p>

#### Then use in component

```typescript
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
```
#### Options
Model: I2ToasterOptions 
| Property | Required | Values                                 | Default |   |
|----------|----------|----------------------------------------|---------|---|
| type     | true     | 'warning', 'success', 'danger', 'info' | success |   |
| message  | true     | string                                 | ''      |   |
|          |          |                                        |         |   |

</p>
</details>
