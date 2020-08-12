import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject, Observable, throwError } from 'rxjs';
import { LoginService, UserInfoDto } from '@uoa/auth';
import { PageInfo } from '@data/type/PageInfo';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Router } from '@angular/router';

const GET_PERSON_PROJECTS = gql`
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
    private router: Router
  ) {}

  async ngOnInit() {
    this.userInfo = await this.loginService.getUserInfo();
    this.loading$.next(true);
    if (this.userInfo) {
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
          console.log(data);
        },
        error => {
          this.loading$.next(false);          
          if (error.message === 'GraphQL error: 404: NOT FOUND') {
            this.personProjects = [];
          }
          else {
            console.log(JSON.stringify(error));
            this.error = error;
          }          
        }
      );
    }
    else {
      throw new Error("Error: User info not found, please try reloading the page.");
    }
  }

  openProject(projectId) {
    console.log("ID:" + projectId);
    this.router.navigateByUrl(`/my-projects/${projectId}`);
  }

  ngOnDestroy(): void {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }
}
