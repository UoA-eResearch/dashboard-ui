import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropbox-list',
  templateUrl: './dropbox-list.component.html',
  styleUrls: ['./dropbox-list.component.scss']
})
export class DropboxListComponent implements OnInit {

  // TO DO: idea is for this component to show a (paginated?) list of ALL CeR dropboxes
  // which will be admin-only

  constructor() { }

  ngOnInit(): void {
  }

}
