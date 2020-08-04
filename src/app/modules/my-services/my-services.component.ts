import { Component, OnInit } from '@angular/core';
import { PageInfo } from '@data/type/PageInfo';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrls: ['./my-services.component.scss']
})
export class MyServicesComponent implements OnInit {
  pageInfo: PageInfo = {
    title: 'Services Dashboard',
    description: `View and manage your eResearch services, such as
                  Virtual Machines, storage, and Nectar allocations.`,
    imageUrl: 'https://via.placeholder.com/1680x220'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
