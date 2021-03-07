import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I2DrawerComponent } from './i2-drawer.component';

describe('I2DrawerComponent', () => {
  let component: I2DrawerComponent;
  let fixture: ComponentFixture<I2DrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I2DrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(I2DrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
