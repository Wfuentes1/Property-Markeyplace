import { TestBed } from '@angular/core/testing';

import { ShareListingService } from './share-listing.service';

describe('ShareListingService', () => {
  let service: ShareListingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareListingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
