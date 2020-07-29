import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input('title') title: string;
  @Input('description') description: string;
  @Input('imageUrl') imageUrl: string;

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
