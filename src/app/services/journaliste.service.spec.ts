import { TestBed } from '@angular/core/testing';

import { JournalisteService } from './journaliste.service';

describe('JournalisteService', () => {
  let service: JournalisteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JournalisteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
