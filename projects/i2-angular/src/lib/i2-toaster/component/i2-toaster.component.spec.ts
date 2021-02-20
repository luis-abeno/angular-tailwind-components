import { ComponentFixture, TestBed } from '@angular/core/testing';

import { I2ToasterComponent } from './i2-toaster.component';

describe('I2ToasterComponent', () => {
  let component: I2ToasterComponent;
  let fixture: ComponentFixture<I2ToasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ I2ToasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(I2ToasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
