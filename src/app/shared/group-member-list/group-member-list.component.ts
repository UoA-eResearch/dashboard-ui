import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { pluck, shareReplay, tap } from 'rxjs/operators';


export const GET_GROUP_MEMBERS = gql`
query GroupMembers($groupnames: [String]!) {
  groupmembers(groupnames: $groupnames) {
    total
    groupname
    users {
      username
      name
    }
  }
}`;

@Component({
  selector: 'app-group-member-list',
  templateUrl: './group-member-list.component.html',
  styleUrls: ['./group-member-list.component.scss']
})
export class GroupMemberListComponent implements OnInit {
  
  @Input() groups: object;
  @Input() groupLabels;

  loading$ = new BehaviorSubject(true);
  error: any;
  groupMembers: any;
  personRoles: any = {};
  nameLookup: any = {};

  private querySubscription: Subscription;

  constructor(
    private apollo: Apollo,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getGroupMembers();
  }

  getGroupMembers() {
    this.querySubscription = this.apollo
    .watchQuery<any>({
      query: GET_GROUP_MEMBERS,
      variables: {
        groupnames: this.groupsToArray(this.groups),
      },
    })
    .valueChanges
    .subscribe(
      ({ data, loading }) => {
        this.groupMembers = data.groupmembers;
        this.mergeRoles();
        this.loading$.next(loading);
      },
      error => {
        this.loading$.next(false);
        if (error.message.includes('Not Authorised!')) {
          this.router.navigate(['/error/403']);
        }
        else {
          console.log(JSON.stringify(error));
          this.error = error;
        }
      }
    );
  }

  groupsToArray(groups: object): string[] {
    let groupArray: string[] = [];
    for (var group in groups) {
      if (group !== "__typename" && groups[group] !== "") {
        // clean up group name (used for lookup to get member type):
        groups[group] = groups[group].replace('.eresearch', '');
        // push cleaned group name to array:
        groupArray.push(groups[group]);
      }
    }
    return groupArray;
  }

  getKeyByValue(object: object, value: any) {
    return Object.keys(object).find(key => object[key] === value);
  }

  getMemberType(groupname: string) {
    const groupLabel = this.getKeyByValue(this.groups, groupname)
    return this.groupLabels[groupLabel];
  }

  mergeRoles() {
    // People often belong to more than one group. Build an object with username as key, and combine a person's roles into an array.  
    for (var group of this.groupMembers) {
      if (group['users']) {
        for (var member of group['users']) {
          if (!this.personRoles.hasOwnProperty(member['username'])) {
            this.personRoles[member['username']] = [];
            this.nameLookup[member['username']] = member['name']
          }
          this.personRoles[member['username']].push(this.getMemberType(group['groupname']));
        }
      }
    }
  }

  ngOnDestroy(): void {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }

}
