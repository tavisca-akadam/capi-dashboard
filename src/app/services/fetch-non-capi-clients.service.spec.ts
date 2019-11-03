import { TestBed } from '@angular/core/testing';

import { FetchNonCapiClientsService } from './fetch-non-capi-clients.service';

describe('FetchNonCapiClientsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchNonCapiClientsService = TestBed.get(FetchNonCapiClientsService);
    expect(service).toBeTruthy();
  });
});
