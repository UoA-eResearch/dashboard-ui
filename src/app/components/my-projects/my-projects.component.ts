import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';

import { LoginService } from 'uoa-auth-angular';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const GET_PERSON_INFO = gql`
query Person($username: String!) {
  user(username: $username) {
    id
    email
    start_date
    projects {
      id
    }
  }
}`;

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit, OnDestroy {
  public userInfo;
  public personInfo;
  public loading$ = new Subject<boolean>();
  public error;

  private querySubscription: Subscription;

  constructor(
    private loginService: LoginService,
    private apollo: Apollo
  ) {}
  

  async ngOnInit() {
    this.loading$.next(true);
    this.userInfo = await this.loginService.getUserInfo();
    this.loading$.next(false);

    this.userInfo && (
      this.querySubscription = this.apollo
      .watchQuery<any>({
        query: GET_PERSON_INFO,
        variables: {
          username: this.userInfo.upi,
        },
      })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.personInfo = data.user;
        this.loading$.next(loading);
        this.error = data.error;
      })
    );
  }

  public logout() {
    this.loginService.logout();
  }
  
  ngOnDestroy(): void {
    this.querySubscription.unsubscribe();
  }
}
