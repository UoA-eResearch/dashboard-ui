import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  routes = [
    { path: '/my-projects', label: 'My Projects' },
    { path: '/my-services', label: 'My Services' },
  ]

  constructor() { }

}
