import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '@uoa/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private loginService: LoginService) {}

  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return !!(await this.loginService.doLogin(state.url));
  }  
}
