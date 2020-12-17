import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserInfoDto, LoginService } from '@uoa/auth';
import { Subject, Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { ActivatedRoute, Router } from '@angular/router';
import gql from 'graphql-tag';


export const GET_DROPBOX = gql`
query Dropbox($id: Int!) {
  dropbox(id: $id) {
    id
    name
    deleted
    team_folder_id_dbx
    projects {
      code
      first_day
      last_day
      project {
        id
        title
        start_date
        end_date
      }
    }
    groups {
      editor_group
      viewer_group
    }
  }
}`;

enum MemberType {
  editor_group = "Read Write",
  viewer_group = "Read Only",
}


@Component({
  selector: 'app-dropbox-details',
  templateUrl: './dropbox-details.component.html',
  styleUrls: ['./dropbox-details.component.scss']
})
export class DropboxDetailsComponent implements OnInit, OnDestroy {
  userInfo: UserInfoDto;
  id;
  dropbox;
  loading$ = new Subject<boolean>();
  error;
  memberTypes = MemberType;

  private querySubscription: Subscription;
  private paramsSubscription: Subscription;

  constructor(
    private loginService: LoginService,
    private apollo: Apollo,
    private route: ActivatedRoute,
    private router: Router
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
        query: GET_DROPBOX,
        variables: {
          id: this.id
        },
      })
      .valueChanges
      .subscribe(
        ({ data, loading }) => {
          this.dropbox = data.dropbox;
          this.loading$.next(loading);
        },
        error => {
          this.loading$.next(false);
          if (error.message.includes('Not Authorised!')) {
            this.router.navigate(['/error/403']);
          }
          else if (error.message === 'GraphQL error: 404: NOT FOUND') {
            this.router.navigate(['/notfound']);
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
