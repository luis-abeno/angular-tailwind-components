# I2 Angular Components
Description

# Dependencies

# About

# Components

<details><summary>Toaster</summary>
<p>

#### Import into your module

```typescript
import { I2ToasterModule } from 'i2-angular';
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
