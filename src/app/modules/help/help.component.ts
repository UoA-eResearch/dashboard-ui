import { Component, OnInit } from '@angular/core';
import { PageInfo } from '@data/type/PageInfo';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  pageInfo: PageInfo = {
    title: 'Welcome to the eResearch Help Repository!',
    description: `Get help with using this website, find answers to frequently asked questions,
                  as well as specific instructions for using the tools and services
                  provided by the Centre for eResearch.`,
    imageUrl: 'https://via.placeholder.com/1680x220'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
