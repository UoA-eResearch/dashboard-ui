import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { LoginService } from '@uoa/auth';

@Injectable({
  providedIn: 'root'
})
export class OnlyServiceMembersGuard implements CanActivate {

  // TO DO: check current user is a group member on the requested service

  constructor(
    private loginService: LoginService,
    private router: Router
  ) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    console.log('OnlyServiceMembersGuard');

    const userInfo = await this.loginService.getUserInfo();

    // TEMP for development only
    // TO DO: check actual group memberships to determine allowed users
    // groups check may be done server side...
    const allowedUsers = ['rmcc872', 'raut473'];

    if (allowedUsers.includes(userInfo.upi)) {
      return Promise.resolve(true);
    }

    this.router.navigate(['/error/403']);
    return Promise.resolve(false);
  }

}
