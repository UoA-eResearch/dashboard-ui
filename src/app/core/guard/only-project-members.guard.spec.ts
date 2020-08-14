import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OnlyProjectMembersGuard } from './only-project-members.guard';
import { Apollo } from 'apollo-angular';

describe('OnlyProjectMembersGuard', () => {
  let guard: OnlyProjectMembersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      providers: [ Apollo ]
    });
    guard = TestBed.inject(OnlyProjectMembersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
