import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject, Observable } from 'rxjs';
import { LoginService } from '@uoa/auth';
import { PageInfo } from '@data/type/PageInfo';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const GET_PERSON_INFO = gql`
query Person($username: String!) {
  user(username: $username) {
    id
    full_name
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
  pageInfo: PageInfo = {
    title: 'Projects Dashboard',
    description: `View and manage your eResearch projects, project members,
                  and project-related services.`,
    imageUrl: 'https://via.placeholder.com/1680x220'
  };
  userInfo;
  personInfo;
  loading$ = new Subject<boolean>();
  error;

  private querySubscription: Subscription;

  constructor(
    private loginService: LoginService,
    private apollo: Apollo
  ) {}

  async ngOnInit() {
    this.userInfo = await this.loginService.getUserInfo();
    this.loading$.next(true);
    if (this.userInfo) {
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
      },
      error => Observable.throw(error)
      );
    }
    else {
      console.log('Error: No user info');
    }
  }

  ngOnDestroy(): void {
    if ( this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }
}
