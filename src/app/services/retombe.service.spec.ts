import { TestBed } from '@angular/core/testing';

import { RetombeService } from './retombe.service';

describe('RetombeService', () => {
  let service: RetombeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetombeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
