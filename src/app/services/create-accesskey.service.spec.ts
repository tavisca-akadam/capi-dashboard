import { TestBed } from '@angular/core/testing';

import { CreateAccesskeyService } from './create-accesskey.service';

describe('CreateAccesskeyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateAccesskeyService = TestBed.get(CreateAccesskeyService);
    expect(service).toBeTruthy();
  });
});
