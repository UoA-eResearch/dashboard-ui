import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { LoginService, UserInfoDto } from '@uoa/auth';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { ActivatedRoute, Router } from '@angular/router';

const GET_PROJECT = gql`
query Project($id: Int!) {
  project(id: $id) {
    id
    title
    start_date
    end_date
    description
    status {
      name
    }
    members {
      role {
        name
      }
      person {
        full_name
        identities {
          username
        }
        email
        divisions {
          division
          divisional_role {
            name
          }
        }
      }
    }
    services {
      dropbox {
        id
        name
      }
      nectar {
        id
        name
      }
      research_drive {
        id
        name
      }
      vis {
        id
        name
      }
      vm {
        id
        name
      }
    }
    research_outputs {
      researchoutput {
        date_reported
        description
        doi
        uri
        type {
          name
        }
      }
    }
  }
}`;

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  userInfo: UserInfoDto;
  id;
  project;
  loading$ = new Subject<boolean>();
  error;

  private querySubscription: Subscription;
  private paramsSubscription: Subscription;

  constructor(
    private loginService: LoginService,
    private apollo: Apollo,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.paramsSubscription = this.route.params.subscribe(
      params => {
        this.id = parseInt(params.id, 10);
      }
    );
  }

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
        },
        error => {
          this.loading$.next(false);
          if (error.message.includes('Not Authorised!')) {
            this.router.navigate(['/error/403']);
          }
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
  }

  ngOnDestroy(): void {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }

    if (this.paramsSubscription) {
      this.paramsSubscription.unsubscribe();
    }
  }
}
