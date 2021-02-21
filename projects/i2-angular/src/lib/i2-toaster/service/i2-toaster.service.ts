import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
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
    // Populate property with provided options to use in component
    this.toasterOptions = options;

    // Create a component reference from the component 
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(I2ToasterComponent)
      .create(this.injector);

    // Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // Get DOM element from component
    let element: HTMLElement = <HTMLElement>componentRef.location.nativeElement;

    // Add some css to component
    element.classList.value = 'absolute right-0 top-0 m-5';

    // Pos Y change for each active instance of the component
    // For the first toaster posy = 0, then add by 3 (3 rem) into component
    element.style.top = this.posY + 'rem';

    // Append DOM element to the body
    document.body.appendChild(element);

    // Wait some time and remove it from the component tree and from the DOM
    // 5 secs it's equal 3 seconds from toaster and 2 seconds to wait animation, then remove from DOM
    // setTimeout(() => {
    //   this.appRef.detachView(componentRef.hostView);
    //   componentRef.destroy();
    // }, 5000);
  }
}
