import { Component, Input, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable, Subject, Subscription } from 'rxjs';
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

  loading$: Observable<boolean>;
  error$: Observable<any>;
  groupMembers$: Observable<any>;

  constructor(
    private apollo: Apollo,
  ) { }

  ngOnInit() {
    const source$ = this.getGroupMembers();

    this.loading$ = source$.pipe(pluck('loading'));
    // this.loading$.subscribe(loading => console.log('IsLoading: ' + loading));
    this.error$ = source$.pipe(pluck('errors'));
    this.groupMembers$ = source$.pipe(pluck('data', 'groupmembers'));
  }

  getGroupMembers() {
    return this.apollo.watchQuery({
      query: GET_GROUP_MEMBERS,
      variables: {
        groupnames: this.groupsToArray(this.groups),
      },
    })
    .valueChanges
    .pipe(shareReplay(1));
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

  ngOnDestroy(): void {
  }

}
