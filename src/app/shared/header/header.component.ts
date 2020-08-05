import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() imageUrl: string;

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
