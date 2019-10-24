import { TestBed } from '@angular/core/testing';

import { FetchNewClietDataService } from './fetch-new-cliet-data.service';

describe('FetchNewClietDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchNewClietDataService = TestBed.get(FetchNewClietDataService);
    expect(service).toBeTruthy();
  });
});
