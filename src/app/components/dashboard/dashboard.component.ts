import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { LoginService } from 'uoa-auth-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public userInfo;
  public authenticated;
  public projectdb_person;
  public projectdb_person_projects;
  public loading$ = new Subject<boolean>();
  constructor(private http: HttpClient, private _loginService: LoginService) {}

  async ngOnInit() {
    this.authenticated = await this._loginService.isAuthenticated();
    console.log("User is authenticated: " + this.authenticated);
    this.userInfo = await this._loginService.getUserInfo();
    this.getPersonInfo();
  }
  
  public logout() {
    this._loginService.logout();
  }

  public getPersonInfo() {
    this.loading$.next(true);
    this.http
      .get("https://apigw.sandbox.amazon.auckland.ac.nz/dev-projectdb-api-wrapper/person/findByIdentity/" + this.userInfo.upi)
      // .pipe(tap((_) => this.loading$.next(false)))
      .subscribe(
        (res) => {
          this.projectdb_person = res;
          this.loading$.next(false);
        },
        (err) => {
          console.log('error', err.error.text);
          this.projectdb_person = err;
          this.loading$.next(false);
        }
      );
  }

  public getPersonProjects() {
    this.loading$.next(true);
    this.http
      .get(`https://apigw.sandbox.amazon.auckland.ac.nz/dev-projectdb-api-wrapper/person/${this.projectdb_person.data.id}/project`)
      // .pipe(tap((_) => this.loading$.next(false)))
      .subscribe(
        (res) => {
          this.projectdb_person_projects = res;
          console.log(res);
          this.loading$.next(false);
        },
        (err) => {
          console.log('error', err.error.text);
          this.projectdb_person_projects = err;
          this.loading$.next(false);
        }
      );
  }
}
