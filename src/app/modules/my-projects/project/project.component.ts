import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject, Observable, throwError } from 'rxjs';
import { LoginService, UserInfoDto } from '@uoa/auth';
import { PageInfo } from '@data/type/PageInfo';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ActivatedRoute } from '@angular/router';

const GET_PROJECT = gql`
query Project($id: Int!) {
  project(id: $id) {
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
}`;

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit, OnDestroy {
  pageInfo: PageInfo = {
    title: 'Projects Dashboard',
    description: `View and manage your eResearch projects, project members,
                  and project-related services.`,
    imageUrl: 'https://via.placeholder.com/1680x220'
  };
  userInfo: UserInfoDto;
  id: any;
  project: any;
  loading$ = new Subject<boolean>();
  error: any;

  private querySubscription: Subscription;

  constructor(
    private loginService: LoginService,
    private apollo: Apollo,
    private route: ActivatedRoute
  ) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }


  // TODO: CHECK THE USER IS ALLOWED TO ACCESS THIS PROJECT ID (implement in graphql server, check in front end also?)
  async ngOnInit() {
    this.userInfo = await this.loginService.getUserInfo();
    this.loading$.next(true);
    if (this.userInfo && this.id) {
      this.querySubscription = this.apollo
      .watchQuery<any>({
        query: GET_PROJECT,
        variables: {
          id: this.id
        },
      })
      .valueChanges
      .subscribe(
        ({ data, loading }) => {
          this.project = data.project;
          this.loading$.next(loading);
          console.log(data);
        },
        error => {
          this.loading$.next(false);          
          if (error.message === 'GraphQL error: 404: NOT FOUND') {
            this.project = [];
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

  ngOnDestroy(): void {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }
}
