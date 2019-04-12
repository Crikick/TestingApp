import { TestBed } from '@angular/core/testing';

import { DubeyService } from './dubey.service';

describe('DubeyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DubeyService = TestBed.get(DubeyService);
    expect(service).toBeTruthy();
  });
});
