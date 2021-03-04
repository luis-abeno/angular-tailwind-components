import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I2TabsItemComponent } from './i2-tabs-item.component';

describe('I2TabsItemComponent', () => {
  let component: I2TabsItemComponent;
  let fixture: ComponentFixture<I2TabsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I2TabsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(I2TabsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
