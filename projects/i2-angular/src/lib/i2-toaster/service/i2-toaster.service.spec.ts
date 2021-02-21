import { TestBed } from '@angular/core/testing';

import { I2ToasterService } from './i2-toaster.service';

describe('I2ToasterService', () => {
  let service: I2ToasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(I2ToasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
