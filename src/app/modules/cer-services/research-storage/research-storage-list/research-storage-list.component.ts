import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-storage-list',
  templateUrl: './research-storage-list.component.html',
  styleUrls: ['./research-storage-list.component.scss']
})
export class ResearchStorageListComponent implements OnInit {

  // TO DO: idea is for this component to show a (paginated?) list of ALL CeR research storage drives
  // which will be admin-only

  constructor() { }

  ngOnInit(): void {
  }

}
