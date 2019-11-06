import { TestBed } from '@angular/core/testing';

import { FetchDataFromHierarchyApiService } from './fetch-data-from-hierarchy-api.service';

describe('FetchDataFromHierarchyApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchDataFromHierarchyApiService = TestBed.get(FetchDataFromHierarchyApiService);
    expect(service).toBeTruthy();
  });
});
