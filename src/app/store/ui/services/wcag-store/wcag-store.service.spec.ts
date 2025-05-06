import { TestBed } from '@angular/core/testing';

import { WcagStoreService } from './wcag-store.service';

describe('WcagStoreService', () => {
  let service: WcagStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WcagStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
