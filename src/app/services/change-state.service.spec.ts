import { TestBed } from '@angular/core/testing';

import { ChangeStateService } from './change-state.service';

describe('ChangeStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChangeStateService = TestBed.get(ChangeStateService);
    expect(service).toBeTruthy();
  });
});
