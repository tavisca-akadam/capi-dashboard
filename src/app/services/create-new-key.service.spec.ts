import { TestBed } from '@angular/core/testing';

import { CreateNewKeyService } from './create-new-key.service';

describe('CreateNewKeyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateNewKeyService = TestBed.get(CreateNewKeyService);
    expect(service).toBeTruthy();
  });
});
