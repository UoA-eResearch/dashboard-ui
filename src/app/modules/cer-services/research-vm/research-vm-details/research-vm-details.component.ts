import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserInfoDto, LoginService } from '@uoa/auth';
import { Subject, Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { ActivatedRoute, Router } from '@angular/router';
import gql from 'graphql-tag';


const GET_VM = gql`
query ResearchVm($id: Int!) {
  researchvm(id: $id) {
    id
    name
    cpus
    date
    deleted
    host
    memory_gb
    os
    state
    total_disk_gb
    uuid
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


@Component({
  selector: 'app-research-vm-details',
  templateUrl: './research-vm-details.component.html',
  styleUrls: ['./research-vm-details.component.scss']
})
export class ResearchVmDetailsComponent implements OnInit, OnDestroy {
  userInfo: UserInfoDto;
  id;
  researchVm;
  loading$ = new Subject<boolean>();
  error;

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
        query: GET_VM,
        variables: {
          id: this.id
        },
      })
      .valueChanges
      .subscribe(
        ({ data, loading }) => {
          console.log(data);
          this.researchVm = data.researchvm;
          this.loading$.next(loading);
        },
        error => {
          this.loading$.next(false);
          if (error.message === 'GraphQL error: 404: NOT FOUND') {
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
