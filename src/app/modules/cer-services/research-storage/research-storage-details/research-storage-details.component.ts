import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserInfoDto, LoginService } from '@uoa/auth';
import { Subject, Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { ActivatedRoute, Router } from '@angular/router';
import gql from 'graphql-tag';


const GET_RESEARCH_STORAGE = gql`
query ResearchStorage($id: Int!) {
  researchstorage(id: $id) {
    id
    name
    allocated_gb
    date
    deleted
    division
    free_gb
    num_files
    percentage_used
    used_gb
    groups {
      adm_group
      ro_group
      rw_group
    }
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
  }
}`;

enum MemberType {
  adm_group = "Admin",
  ro_group = "Read Write",
  rw_group = "Read Only",
  t_group = "T",
}

@Component({
  selector: 'app-research-storage-details',
  templateUrl: './research-storage-details.component.html',
  styleUrls: ['./research-storage-details.component.scss']
})
export class ResearchStorageDetailsComponent implements OnInit, OnDestroy {
  userInfo: UserInfoDto;
  id;
  researchStorage;
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
        query: GET_RESEARCH_STORAGE,
        variables: {
          id: this.id
        },
      })
      .valueChanges
      .subscribe(
        ({ data, loading }) => {
          this.researchStorage = data.researchstorage;
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
