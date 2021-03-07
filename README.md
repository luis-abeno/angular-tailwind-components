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

After that just serve the main application and import modules do you want to test.

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

constructor(private _i2Toaster: I2ToasterService){}

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
| Property | Required | Values                                 |
|----------|----------|----------------------------------------|
| type     | true     | 'warning', 'success', 'danger', 'info' |
| message  | true     | string                                 |

</p>
</details>

<details><summary>Tabs</summary>
<p>

#### Import into your module

```typescript
import { I2TabsModule } from 'i2-angular';
```
</p>

<p>

#### Then use in component

```html
<i2-tabs>
    <i2-tabs-item [tabTitle]="'Tab 1'">
        Tab 1 content
    </i2-tabs-item>
    <i2-tabs-item tabTitle="Tab 2">
        Tab 2 content
    </i2-tabs-item>
</i2-tabs>
```
#### Options
Model: I2ToasterOptions 
| Property | Required | Values                                 |
|----------|----------|----------------------------------------|
| tabTitle | true     | string                                 |
| active   | false    | boolean                                |

</p>
</details>

<details><summary>Drawer</summary>
<p>

#### Import into your module

```typescript
import { I2DrawerModule } from 'i2-angular';
```
</p>

<p>

#### Then use in component

```typescript
import { I2DrawerService } from 'i2-angular';

constructor(private _drawerService: I2DrawerService){}

this._drawerService.show({
  title: 'My Drawer',
  size: 'md'
})
```
#### Options
Model: I2ToasterOptions 
| Property | Required | Values                                 |
|----------|----------|----------------------------------------|
| title    | false    | object                                 |
| .text    | false    | string                                 |
| .size    | false    | string                                 |
| .color   | false    | string                                 |
| size     | false    | 'lg' | 'md' | 'sm'                     |

</p>
</details>
