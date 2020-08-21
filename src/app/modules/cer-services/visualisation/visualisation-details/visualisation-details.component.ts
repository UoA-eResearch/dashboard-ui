import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserInfoDto, LoginService } from '@uoa/auth';
import { Subject, Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { ActivatedRoute, Router } from '@angular/router';
import gql from 'graphql-tag';


const GET_VISUALISATION = gql`
query Visualisation($id: Int!) {
  visualisation(id: $id) {
    id
    name
    deleted
		gear_vr
		holo_lens
		video_based_vis
		vive
		web_based_vis
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
  selector: 'app-visualisation-details',
  templateUrl: './visualisation-details.component.html',
  styleUrls: ['./visualisation-details.component.scss']
})
export class VisualisationDetailsComponent implements OnInit, OnDestroy {
  userInfo: UserInfoDto;
  id;
  visualisation;
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
        query: GET_VISUALISATION,
        variables: {
          id: this.id
        },
      })
      .valueChanges
      .subscribe(
        ({ data, loading }) => {
          console.log(data);
          this.visualisation = data.visualisation;
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
