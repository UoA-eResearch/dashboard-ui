import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OnlyAdminGuard } from './only-admin.guard';

describe('OnlyAdminGuard', () => {
  let guard: OnlyAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    guard = TestBed.inject(OnlyAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
