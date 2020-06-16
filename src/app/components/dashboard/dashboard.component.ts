import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { LoginService } from 'uoa-auth-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public userInfo;
  public authenticated;
  public projectdbPerson;
  public projectdbPersonProjects;
  public loading$ = new Subject<boolean>();

  constructor(
    private http: HttpClient,
    private loginService: LoginService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.authenticated = await this.loginService.isAuthenticated();
    console.log('User is authenticated: ' + this.authenticated);
    this.userInfo = await this.loginService.getUserInfo();
    console.log(this.userInfo);
  }

  public logout() {
    this.loginService.logout();
  }
}
