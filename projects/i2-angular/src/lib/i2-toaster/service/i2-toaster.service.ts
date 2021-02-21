import { ApplicationRef, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector } from '@angular/core';
import { I2ToasterOptions } from '../model/i2-toaster.model';
import { I2ToasterComponent } from '../component/i2-toaster.component';

@Injectable({
  providedIn: 'root'
})
export class I2ToasterService {
  posY = 0;
  toasterOptions!: I2ToasterOptions;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  /**
   * 
   * @param options
   */
  show(options: I2ToasterOptions) {
    this.toasterOptions = options;
    // Create a component reference from the component 
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(I2ToasterComponent)
      .create(this.injector);

    // Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // Get DOM element from component
    let element: HTMLElement = <HTMLElement>componentRef.location.nativeElement;

    element.classList.value = 'absolute right-0 top-0 m-5';
    element.style.top = this.posY + 'rem';

    console.log(element)

    // Append DOM element to the body
    document.body.appendChild(element);

    // Wait some time and remove it from the component tree and from the DOM
    setTimeout(() => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    }, 5000);
  }
}
