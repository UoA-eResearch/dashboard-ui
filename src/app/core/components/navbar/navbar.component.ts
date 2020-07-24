import { Component, OnInit } from '@angular/core';
import { LoginService, UserInfoDto } from '@uoa/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  authenticated: boolean;
  showLoginBtn = true;
  userInfo: UserInfoDto;
  routes = [
    { path: '/my-projects', label: 'My Projects' },
    { path: '/my-services', label: 'My Services' },
  ]

  constructor(public loginService: LoginService, private router: Router) { }

  async ngOnInit() {
    this.authenticated = await this.loginService.isAuthenticated();
    this.userInfo = await this.loginService.getUserInfo();
    
    // TODO userInfo.groups is in unexpected format..
    // var groups: string = <string><unknown>this.userInfo.groups;
    // console.log(groups.substring(1, groups.length-1).split(", "));
  }

  async login() {
    console.log(this.router.url);
    await this.loginService.doLogin(this.router.url);
  }

  logout() {
    this.loginService.logout();
  }
}
