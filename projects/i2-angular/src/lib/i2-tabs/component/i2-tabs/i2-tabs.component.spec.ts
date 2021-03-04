import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I2TabsComponent } from './i2-tabs.component';

describe('I2TabsComponent', () => {
  let component: I2TabsComponent;
  let fixture: ComponentFixture<I2TabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I2TabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(I2TabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
