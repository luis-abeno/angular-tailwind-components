import { ApplicationRef, ComponentFactoryResolver, Inject, Injectable, Injector, ɵComponentType } from '@angular/core';
import { I2ToasterOptions } from '../model/i2-toaster.model';
import { TOASTER_TOKEN } from '../injection-token';

@Injectable({
  providedIn: 'root'
})
export class I2ToasterService {
  posY = 0;
  toasterOptions!: I2ToasterOptions;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    @Inject(TOASTER_TOKEN) private I2ToasterComponent: ɵComponentType<any>,
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
      .resolveComponentFactory(this.I2ToasterComponent)
      .create(this.injector);

    // Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(componentRef.hostView);

    // Get DOM element from component
    let element: HTMLElement = <HTMLElement>componentRef.location.nativeElement;

    // Set toaster direction
    let direction: string = 'right-0 top-0';
    switch (options.direction) {
      case 'top-left': direction = 'left-0 top-0'; break;
      case 'top-right': direction = 'right-0 top-0'; break;
      case 'bottom-left': direction = 'left-0 bottom-0'; break;
      case 'bottom-right': direction = 'right-0 bottom-0'; break;
      default: direction = 'right-0 top-0'; break;
    }

    // Add some css to component
    element.classList.value = 'z-50 absolute m-5 ' + direction;

    // Pos Y change for each active instance of the component
    // For the first toaster posy = 0, then add by 3 (3 rem) into component
    if (options.direction === 'top-left' || options.direction === 'top-right') {
      element.style.top = this.posY + 'rem';
    } else {
      element.style.bottom = this.posY + 'rem';
    }

    // Append DOM element to the body
    document.body.appendChild(element);

    // Wait some time and remove it from the component tree and from the DOM
    // 5 secs it's equal 3 seconds from toaster and 2 seconds to wait animation, then remove from DOM
    setTimeout(() => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    }, 5000);
  }
}
