import { Component, OnInit } from '@angular/core';
import { LoginService } from '@uoa/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  routes = [
    { path: '/my-projects', label: 'My Projects' },
    { path: '/my-services', label: 'My Services' },
    { path: '/help', label: 'Help' },
  ]

  constructor(public loginService: LoginService, private router: Router) { }
  
  async ngOnInit() {
    const authenticated = await this.loginService.isAuthenticated();
        
    if (authenticated) {
      await this.loginService.getUserInfo();
    }
  }

  async login() {
    await this.loginService.doLogin(this.router.url);
  }

  logout() {
    this.loginService.logout();
  }
}
