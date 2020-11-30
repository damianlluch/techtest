import { TestBed } from '@angular/core/testing';

import { TechtestService } from './techtest.service';

describe('TechtestService', () => {
  let service: TechtestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechtestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
