import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  // TO DO: idea is for this component to show a (paginated?) list of ALL CeR projects
  // which will be admin-only

  constructor() { }

  ngOnInit(): void {
  }

}
