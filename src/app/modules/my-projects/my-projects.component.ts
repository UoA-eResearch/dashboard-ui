import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { LoginService, UserInfoDto } from '@uoa/auth';
import { PageInfo } from '@data/type/PageInfo';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Router } from '@angular/router';
import { NotificationService } from '@app/service/notification.service';


export const GET_PERSON_PROJECTS = gql`
query Person($username: String!) {
  user(username: $username) {
    projects {
      project {
        id
        title
        start_date
        end_date
        description
        members {
          role {
            name
          }
          person {
            full_name
          }
        }
      }
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
  userInfo: UserInfoDto;
  personProjects: any;
  loading$ = new Subject<boolean>();
  error: any;
  private querySubscription: Subscription;

  constructor(
    private loginService: LoginService,
    private apollo: Apollo,
    private router: Router,
    private notificationService: NotificationService
  ) {}

  async ngOnInit() {
    this.userInfo = await this.loginService.getUserInfo();
    if (this.userInfo) {
      this.getMyProjects();
    } else {
      const errorMessage = 'User info not found, please check you are logged in and/or try reloading the page.';
      this.notificationService.error(errorMessage);
    }
  }

  getMyProjects() {
    this.loading$.next(true);
    this.querySubscription = this.apollo
    .watchQuery<any>({
      query: GET_PERSON_PROJECTS,
      variables: {
        username: this.userInfo.upi,
      },
    })
    .valueChanges
    .subscribe(
      ({ data, loading }) => {
        this.personProjects = data.user;
        this.loading$.next(loading);
      },
      error => {
        this.loading$.next(false);
        if (error.message.includes('Not Authorised!')) {
          this.router.navigate(['/error/403']);
        }
        else if (error.message === 'GraphQL error: 404: NOT FOUND') {
          this.personProjects = [];
        }
        else {
          console.log(JSON.stringify(error));
          this.error = error;
        }
      }
    );
  }

  ngOnDestroy(): void {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }
}
