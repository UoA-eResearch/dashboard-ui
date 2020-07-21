import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = "Title";
  description: string = "This is the description";
  imageUrl: string = "https://via.placeholder.com/1680x220";
  isVisible: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  getBackgroundStyle() {
    return {'background-image': 'url(' + this.imageUrl + ')'};
  }

  getInfoStyle() {
    return {'margin-bottom': '6em'};
  }

}
