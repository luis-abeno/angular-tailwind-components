export class I2ToasterOptions {
    type: 'warning' | 'success' | 'danger' | 'info' = "success";
    message: string = '';
    direction?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'top-right';
}