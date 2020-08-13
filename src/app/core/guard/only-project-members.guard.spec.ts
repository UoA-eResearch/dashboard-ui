import { TestBed } from '@angular/core/testing';

import { OnlyProjectMembersGuard } from './only-project-members.guard';

describe('OnlyProjectMembersGuard', () => {
  let guard: OnlyProjectMembersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnlyProjectMembersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
