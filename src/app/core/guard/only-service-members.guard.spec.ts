import { TestBed } from '@angular/core/testing';

import { OnlyServiceMembersGuard } from './only-service-members.guard';

describe('OnlyServiceMembersGuard', () => {
  let guard: OnlyServiceMembersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnlyServiceMembersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
