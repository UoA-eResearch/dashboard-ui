import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { OnlyProjectMembersGuard } from './only-project-members.guard';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';


describe('OnlyProjectMembersGuard', () => {
  let guard: OnlyProjectMembersGuard;
  let controller: ApolloTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ApolloTestingModule
      ]
    });
    guard = TestBed.inject(OnlyProjectMembersGuard);
    controller = TestBed.get(ApolloTestingController);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  afterEach(() => {
    controller.verify();
  });
});
