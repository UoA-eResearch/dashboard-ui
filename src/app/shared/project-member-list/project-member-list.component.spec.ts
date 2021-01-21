import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@shared/shared.module';
import { ProjectMemberListComponent } from './project-member-list.component';

describe('ProjectMemberListComponent', () => {
  let component: ProjectMemberListComponent;
  let fixture: ComponentFixture<ProjectMemberListComponent>;
  const PROJECT_MEMBERS_MOCK: Array<object> = new Array<object>({
    "role": {
      "name": "Project Owner",
      "__typename": "Role"
    },
    "person": {
      "id": 2,
      "full_name": "Person Two",
      "__typename": "Person"
    },
    "__typename": "ProjectMember"
  }, {
    "role": {
      "name": "Primary Adviser",
      "__typename": "Role"
    },
    "person": {
      "id": 1,
      "full_name": "Person One",
      "__typename": "Person"
    },
    "__typename": "ProjectMember"
  }, {
    "role": {
      "name": "Data Owner",
      "__typename": "Role"
    },
    "person": {
      "id": 2,
      "full_name": "Person Two",
      "__typename": "Person"
    },
    "__typename": "ProjectMember"
  }, {
    "role": {
      "name": "Data Contact",
      "__typename": "Role"
    },
    "person": {
      "id": 2,
      "full_name": "Person Two",
      "__typename": "Person"
    },
    "__typename": "ProjectMember"
  });
  const PERSON_ROLES_MOCK: any = {
    "1": ["Primary Adviser"],
    "2": ["Project Owner", "Data Owner", "Data Contact"]
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMemberListComponent ],
      imports: [ SharedModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMemberListComponent);
    component = fixture.componentInstance;
    component.projectMembers = PROJECT_MEMBERS_MOCK;
    component.listFormat = 'chips';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mergeProjectMemberRoles', () => {
    expect(component.personRoles).toEqual(PERSON_ROLES_MOCK);
  });

  afterEach(() => {
    fixture.destroy();
  });
});
