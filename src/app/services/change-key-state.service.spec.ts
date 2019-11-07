import { TestBed } from '@angular/core/testing';

import { ChangeKeyStateService } from './change-key-state.service';

describe('ChangeKeyStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeKeyStateService = TestBed.get(ChangeKeyStateService);
    expect(service).toBeTruthy();
  });
});
