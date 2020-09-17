import { Component, Input, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subject, Subscription } from 'rxjs';


const GET_GROUP_MEMBERS = gql`
query GroupMembers($id: String!) {
  groupmembers(id: $id) {
    total
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
  
  @Input() groupId: string;
  loading$ = new Subject<boolean>();
  groupMembers;
  error;
  cerGroupBaseName = 'eresearch.auckland.ac.nz:'

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
        id: this.cerGroupBaseName + this.groupId
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

  ngOnDestroy(): void {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }

}
