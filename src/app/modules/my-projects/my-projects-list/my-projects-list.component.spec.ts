import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MyProjectsListComponent } from './my-projects-list.component';
import { SharedModule } from '@shared/shared.module';

describe('MyProjectsListComponent', () => {
  let component: MyProjectsListComponent;
  let fixture: ComponentFixture<MyProjectsListComponent>;
  const PROJECTS_MOCK = [{
    project: {
      id: 1,
      title: 'Project 1 Title',
      start_date: '2020-06-27',
      end_date: '2020-09-27',
      description: 'Project 1 Description',
      members: [{
        role: {
          name: 'Project Owner',
          __typename: 'Role'
        },
        person: {
          full_name: 'Mickey Mouse',
          __typename: 'Person'
        },
        __typename: 'ProjectMember'
      }, {
        role: {
          name: 'Primary Adviser',
          __typename: 'Role'
        },
        person: {
          full_name: 'Minnie Mouse',
          __typename: 'Person'
        },
        __typename: 'ProjectMember'
      }],
      __typename: 'Project'
    },
    __typename: 'ProjectOfPerson'
  }, {
    project: {
      id: 2,
      title: 'Project 2 Title',
      start_date: '2020-07-27',
      end_date: '2020-08-27',
      description: 'Project 2 Description',
      members: [{
        role: {
          name: 'Project Owner',
          __typename: 'Role'
        },
        person: {
          full_name: 'Mickey Mouse',
          __typename: 'Person'
        },
        __typename: 'ProjectMember'
      }, {
        role: {
          name: 'Primary Adviser',
          __typename: 'Role'
        },
        person: {
          full_name: 'Minnie Mouse',
          __typename: 'Person'
        },
        __typename: 'ProjectMember'
      }],
      __typename: 'Project'
    },
    __typename: 'ProjectOfPerson'
  }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProjectsListComponent ],
      imports: [
        RouterTestingModule,
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.projects = PROJECTS_MOCK;
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    fixture.destroy();
  });
});
