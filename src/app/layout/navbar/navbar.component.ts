import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService, UserInfoDto } from '@uoa/auth';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  authenticated: boolean;
  userInfo: UserInfoDto;
  routes = [
    { path: '/my-projects', label: 'My Projects' },
    { path: '/my-services', label: 'My Services' },
    { path: '/help', label: 'Help' },
  ]
  // TODO: handle subscriptions better
  loggedInSub: Subscription;
  userInfoSub: Subscription;

  constructor(public loginService: LoginService, private router: Router) { }
  
  async ngOnInit() {
    await this.loginService.isAuthenticated();

    this.loggedInSub = this.loginService.loggedIn$.subscribe(
      (loggedIn: boolean) => { this.authenticated = loggedIn },
      (err) => { console.log('loggedIn$ Observable error: ' + err) }
    );
        
    if (this.authenticated) {
      await this.loginService.getUserInfo();

      this.userInfoSub = this.loginService.userInfo$.subscribe(
        (userInfo: UserInfoDto) => { this.userInfo = userInfo },
        (err) => { console.log('userInfo$ Observable error: ' + err) }
      )
    }
    
    // TODO: userInfo.groups is in unexpected format..
    // var groups: string = <string><unknown>this.userInfo.groups;
    // console.log(groups.substring(1, groups.length-1).split(", "));
  }

  async login() {
    const success = await this.loginService.doLogin(this.router.url);
    if (success) {
      this.authenticated = await this.loginService.isAuthenticated();
      this.userInfo = await this.loginService.getUserInfo();

      this.loginService.userInfo$
    }
  }

  logout() {
    this.loginService.logout();
  }

  ngOnDestroy(): void {
    if (this.loggedInSub != null) {
      this.loggedInSub.unsubscribe()
    }

    if (this.userInfoSub != null) {
      this.userInfoSub.unsubscribe()
    }
  }
}
