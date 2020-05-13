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
    this.getPersonInfo();
  }

  public logout() {
    this.loginService.logout();
  }

  public getPersonInfo() {
    this.loading$.next(true);
    this.http
      .get('https://apigw.sandbox.amazon.auckland.ac.nz/dev-projectdb-api-wrapper/person/findByIdentity/' + this.userInfo.upi)
      .subscribe(
        (res) => {
          this.projectdbPerson = res;
          this.loading$.next(false);
        },
        (err) => {
          console.log('error', err.error.text);
          this.projectdbPerson = err;
          this.loading$.next(false);
        }
      );
  }

  public getPersonProjects() {
    this.loading$.next(true);
    this.http
      .get(`https://apigw.sandbox.amazon.auckland.ac.nz/dev-projectdb-api-wrapper/person/${this.projectdbPerson.data.id}/project`)
      .subscribe(
        (res) => {
          this.projectdbPersonProjects = res;
          console.log(res);
          this.loading$.next(false);
        },
        (err) => {
          console.log('error', err.error.text);
          this.projectdbPersonProjects = err;
          this.loading$.next(false);
        }
      );
  }
}
