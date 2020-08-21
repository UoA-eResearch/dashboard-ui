import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserInfoDto, LoginService } from '@uoa/auth';
import { Subject, Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { ActivatedRoute, Router } from '@angular/router';
import gql from 'graphql-tag';


const GET_NECTAR = gql`
query Nectar($id: Int!) {
  nectar(id: $id) {
    id
    name
    allocation_id_ntr
    core
    cpu_optimised
    database_server
    database_storage
    date
    deleted
    division
    floating_ip
    instance
    load_balancer
    network
    object_store
    project_id_ntr
    ram
    ram_optimised
    router
    shared_fs
    status
    volume
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
  selector: 'app-nectar-details',
  templateUrl: './nectar-details.component.html',
  styleUrls: ['./nectar-details.component.scss']
})
export class NectarDetailsComponent implements OnInit, OnDestroy {
  userInfo: UserInfoDto;
  id;
  nectar;
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
        query: GET_NECTAR,
        variables: {
          id: this.id
        },
      })
      .valueChanges
      .subscribe(
        ({ data, loading }) => {
          console.log(data);
          this.nectar = data.nectar;
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
