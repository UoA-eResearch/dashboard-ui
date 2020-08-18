import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OnlyServiceMembersGuard } from './only-service-members.guard';

describe('OnlyServiceMembersGuard', () => {
  let guard: OnlyServiceMembersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(OnlyServiceMembersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
