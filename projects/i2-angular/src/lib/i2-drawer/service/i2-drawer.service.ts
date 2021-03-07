import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Inject, Injectable, Injector, ɵComponentType } from '@angular/core';
import { I2DrawerOptions } from '../model/i2-drawer.model';
import { DRAWER_TOKEN } from '../injection-token';

@Injectable({
  providedIn: 'root'
})
export class I2DrawerService {
  drawerOptions!: I2DrawerOptions;
  componentRef!: ComponentRef<any>;
  drawerContentRef!: ComponentRef<any>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    @Inject(DRAWER_TOKEN) private I2DrawerComponent: ɵComponentType<any>,
  ) { }

  /**
   * 
   * @param options
   */
  show(options: I2DrawerOptions) {
    // Populate property with provided options to use in component
    this.drawerOptions = options;

    if (document.getElementById('i2-drawer') === null) {
      // Create a component reference from the component 
      this.componentRef = this.componentFactoryResolver
        .resolveComponentFactory(this.I2DrawerComponent)
        .create(this.injector);

      this.drawerContentRef = this.componentFactoryResolver
        .resolveComponentFactory(this.drawerOptions.content)
        .create(this.injector);

      // Attach component to the appRef so that it's inside the ng component tree
      this.appRef.attachView(this.componentRef.hostView);
      this.appRef.attachView(this.drawerContentRef.hostView);

      // Get DOM element from component
      let element: HTMLElement = <HTMLElement>this.componentRef.location.nativeElement;
      let drawerContent: HTMLElement = <HTMLElement>this.drawerContentRef.location.nativeElement;

      // Append DOM element to the body
      document.body.appendChild(element);

      // Append component passed as parameter into drawer body
      document.getElementById('i2-drawer-content')?.appendChild(drawerContent);
    }
  }

  close() {
    this.appRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
  }
}
