import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { GroupMemberListComponent, GET_GROUP_MEMBERS } from './group-member-list.component';

describe('GroupMemberListComponent', () => {
  let component: GroupMemberListComponent;
  let fixture: ComponentFixture<GroupMemberListComponent>;
  let controller: ApolloTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupMemberListComponent ],
      imports: [
        ApolloTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    controller = TestBed.inject(ApolloTestingController);
    fixture = TestBed.createComponent(GroupMemberListComponent);
    component = fixture.componentInstance;
    component.groups = {'user_group': 'rvmf00001_vmuser.eresearch'};
    enum MemberType {
      user_group = "User",
    }
    component.groupLabels = MemberType;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should convert groups object to array', () => {
    const groupsArray = component.groupsToArray(component.groups);
    expect(groupsArray).toEqual(['rvmf00001_vmuser']);
  });

  it('should get correct group member type', () => {
    const memberType = component.getMemberType('rvmf00001_vmuser');
    expect(memberType).toBe('User');
  });

  it('should get group members', () => {
    const MOCK_RESPONSE = {
      data: {
        groupmembers: [{
          total: 1,
          groupname: 'rvmf00001_vmuser',
          users: [{
            username: 'test123',
            name: 'test'
          }]
        }],
      },
    }

    component.getGroupMembers().subscribe(result => {
      expect(result.data['groupmembers'][0].total).toBe(1);
      expect(result.data['groupmembers'][0].groupname).toBe('rvmf00001_vmuser');
      expect(result.data['groupmembers'][0].users[0].username).toBe('test123');
    });

    const op = controller.expectOne(GET_GROUP_MEMBERS);
    expect(op.operation.variables.groupnames).toEqual(['rvmf00001_vmuser']);
    op.flush(MOCK_RESPONSE);
  });

  afterEach(() => {
    //controller.verify(); // TO DO: Fix open operation error
    fixture.destroy();
  });
});
