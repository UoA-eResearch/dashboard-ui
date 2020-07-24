import { Component, OnInit } from '@angular/core';
import { LoginService } from '@uoa/auth';
import { UserInfo } from './../../../model/UserInfo';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  authenticated: boolean;
  userInfo: UserInfo;
  routes = [
    { path: '/my-projects', label: 'My Projects' },
    { path: '/my-services', label: 'My Services' },
  ]

  constructor(private loginService: LoginService) { }

  async ngOnInit() {
    this.authenticated = await this.loginService.isAuthenticated();
    this.userInfo = await this.loginService.getUserInfo();
    
    // TODO userInfo.groups is in unexpected format..
    // var groups: string = <string><unknown>this.userInfo.groups;
    // console.log(groups.substring(1, groups.length-1).split(", "));
  }

  logout() {
    this.loginService.logout();
  }
}
