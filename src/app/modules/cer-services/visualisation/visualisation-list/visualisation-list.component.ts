import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualisation-list',
  templateUrl: './visualisation-list.component.html',
  styleUrls: ['./visualisation-list.component.scss']
})
export class VisualisationListComponent implements OnInit {

  // TO DO: idea is for this component to show a (paginated?) list of ALL CeR vis projects
  // which will be admin-only 

  constructor() { }

  ngOnInit(): void {
  }

}
