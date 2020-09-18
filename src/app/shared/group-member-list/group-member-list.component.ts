import { Component, Input, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subject, Subscription } from 'rxjs';


const GET_GROUP_MEMBERS = gql`
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
  groupsLabelsMapping = {};
  loading$ = new Subject<boolean>();
  groupMembers;
  error;

  private querySubscription: Subscription;

  constructor(
    private apollo: Apollo,
  ) { }

  async ngOnInit() {
    this.loading$.next(true);
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
        this.loading$.next(loading);
      },
      error => {
        this.loading$.next(false);
        console.log(JSON.stringify(error));
        this.error = error;
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

  ngOnDestroy(): void {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }

}
