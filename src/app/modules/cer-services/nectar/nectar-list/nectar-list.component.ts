import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nectar-list',
  templateUrl: './nectar-list.component.html',
  styleUrls: ['./nectar-list.component.scss']
})
export class NectarListComponent implements OnInit {

  // TO DO: idea is for this component to show a (paginated?) list of ALL CeR Nectar
  // which will be admin-only

  constructor() { }

  ngOnInit(): void {
  }

}
