import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-vm-list',
  templateUrl: './research-vm-list.component.html',
  styleUrls: ['./research-vm-list.component.scss']
})
export class ResearchVmListComponent implements OnInit {

  // TO DO: idea is for this component to show a (paginated?) list of ALL CeR research vms
  // which will be admin-only 

  constructor() { }

  ngOnInit(): void {
  }

}
