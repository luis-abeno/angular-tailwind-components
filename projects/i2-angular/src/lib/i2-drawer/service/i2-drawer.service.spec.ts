import { TestBed } from '@angular/core/testing';

import { I2DrawerService } from './i2-drawer.service';

describe('I2DrawerService', () => {
  let service: I2DrawerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(I2DrawerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
