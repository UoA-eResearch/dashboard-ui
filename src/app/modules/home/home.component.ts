import { Component } from '@angular/core';
import { PageInfo } from '@data/type/PageInfo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  pageInfo: PageInfo = {
    title: 'Welcome to the eResearch Dashboard',
    description: `The eResearch Dashboard lets you view, manage and interact with
                  services that have been provided to you by the Centre for eResearch.`,
    imageUrl: 'https://via.placeholder.com/1680x220'
  };

  constructor() {}
}
