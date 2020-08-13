import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { LoginService } from '@uoa/auth';


const GET_PROJECT_MEMBERS = gql`
query Project($id: Int!) {
  project(id: $id) {
    id
    members {
      role {
        name
      }
      person {
        identities {
          username
        }
      }
    }
  }
}`;

@Injectable({
  providedIn: 'root'
})
export class OnlyMembersGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private apollo: Apollo,
    private router: Router
  ) {}

  async canActivate(
    next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): Promise<boolean> {
    const userInfo = await this.loginService.getUserInfo();
    const projectId = next.params.id;
    const result = await this.apollo.query<any>({
      query: GET_PROJECT_MEMBERS,
      variables: {
        id: +next.params.id
      }
    }).toPromise();

    const members = result.data.project.members;
    for (let i = 0; i < members.length; i++) {
      for (let j = 0; j < members[i].person?.identities.length; j++) {
        if (members[i].person?.identities[j].username === userInfo.upi) {
          return Promise.resolve(true);
        }
      }
    }

    this.router.navigate(['/error/403']);
    return Promise.resolve(false);
  }
  
}
