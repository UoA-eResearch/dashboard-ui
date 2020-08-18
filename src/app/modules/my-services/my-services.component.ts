import { Component, OnInit, OnDestroy } from '@angular/core';
import { PageInfo } from '@data/type/PageInfo';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { UserInfoDto, LoginService } from '@uoa/auth';
import { Subject, Subscription } from 'rxjs';


const GET_PERSON_SERVICES = gql`
query Person($username: String!) {
  user(username: $username) {
    projects {
      project {
        id
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
      }
    }
  }
}`;


@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss']
})
export class MyServicesComponent implements OnInit, OnDestroy {
  pageInfo: PageInfo = {
    title: 'Services Dashboard',
    description: `View and manage your eResearch services, such as
                  Virtual Machines, storage, and Nectar allocations.`,
    imageUrl: 'https://via.placeholder.com/1680x220'
  };
  userInfo: UserInfoDto;
  personServices: Object;
  hasNoServices: boolean = false;
  loading$ = new Subject<boolean>();
  error: any;

  private querySubscription: Subscription;

  constructor(
    private loginService: LoginService,
    private apollo: Apollo
  ) { }

  async ngOnInit(): Promise<void> {
    this.userInfo = await this.loginService.getUserInfo();
    this.loading$.next(true);
    if (this.userInfo) {
      this.querySubscription = this.apollo
      .watchQuery<any>({
        query: GET_PERSON_SERVICES,
        variables: {
          username: this.userInfo.upi,
        },
      })
      .valueChanges
      .subscribe(
        ({ data, loading }) => {
          this.personServices = this.getAllServices(data.user.projects);
          this.loading$.next(loading);
        },
        error => {
          this.loading$.next(false);          
          if (error.message === 'GraphQL error: 404: NOT FOUND') {
            this.personServices = [];
            this.hasNoServices = true;
          }
          else {
            console.debug(JSON.stringify(error));
            this.error = error;
          }          
        }
      );
    }
  }

  getAllServices(projects) {
    let services = {
      dropbox: [],
      nectar: [],
      research_drive: [],
      vis: [],
      vm: []
    };

    for (let i = 0; i < projects.length; i++) {
      services.dropbox = services.dropbox.concat(projects[i].project.services?.dropbox);
      services.nectar = services.nectar.concat(projects[i].project.services?.nectar);
      services.research_drive = services.research_drive.concat(projects[i].project.services?.research_drive);
      services.vis = services.vis.concat(projects[i].project.services?.vis);
      services.vm = services.vm.concat(projects[i].project.services?.vm);      
    }

    // check if there are any services
    this.hasNoServices = Object.keys(services).every(function(key) {
      return services[key].length === 0
    });

    return services;
  }

  ngOnDestroy(): void {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }
}
