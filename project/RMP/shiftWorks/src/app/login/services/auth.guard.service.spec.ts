import { TestBed, inject } from '@angular/core/testing';

import { AuthGuardService } from './auth.guard.service';

describe('Auth.GuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardService]
    });
  });

  it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
