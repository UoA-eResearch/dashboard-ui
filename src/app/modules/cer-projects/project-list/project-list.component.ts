import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subject, Subscription } from 'rxjs';


const GET_ALL_PROJECTS = gql`
query Projects {
  projects {
    id
    title
    start_date
    end_date
  }
}`;

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {

  // TO DO: list should be paginated

  projects: any;
  loading$ = new Subject<boolean>();
  error: any;

  private querySubscription: Subscription;

  constructor(
    private apollo: Apollo,
    private router: Router,
  ) {}

  async ngOnInit() {
    this.loading$.next(true);
    this.querySubscription = this.apollo
    .watchQuery<any>({
      query: GET_ALL_PROJECTS,
    })
    .valueChanges
    .subscribe(
      ({ data, loading }) => {
        this.projects = data.projects;
        this.loading$.next(loading);
      },
      error => {
        this.loading$.next(false);
        if (error.message === 'Not authorized!') {
          this.router.navigate(['/error/403']);
        }
        if (error.message === 'GraphQL error: 404: NOT FOUND') {
          this.projects = [];
        }
        else {
          console.log(JSON.stringify(error));
          this.error = error;
        }
      }
    );
  }

  openProject(projectId) {
    this.router.navigateByUrl(`/project/${projectId}`);
  }

  ngOnDestroy(): void {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }
}
