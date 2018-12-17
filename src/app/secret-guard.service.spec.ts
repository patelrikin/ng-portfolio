import { TestBed } from '@angular/core/testing';

import { SecretGuardService } from './secret-guard.service';

describe('SecretGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecretGuardService = TestBed.get(SecretGuardService);
    expect(service).toBeTruthy();
  });
});
