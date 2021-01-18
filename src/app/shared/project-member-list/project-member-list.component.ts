import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-member-list',
  templateUrl: './project-member-list.component.html',
  styleUrls: ['./project-member-list.component.scss']
})
export class ProjectMemberListComponent implements OnInit {
  @Input() projectMembers: Array<object>;
  @Input() listFormat: string;
  personRoles: any = {};
  nameLookup: any = {};
  divisionsLookup: any = {};

  constructor() { }

  ngOnInit(): void {
    this.mergeProjectMemberRoles();
    console.log(this.projectMembers);
  }

  mergeProjectMemberRoles() {
    // People often have more than one role on a project. Build an object with person id as key, and combine a person's roles into an array.  
    for (var member of this.projectMembers) {
      let id = member['person']['id']
      if (!this.personRoles.hasOwnProperty(id)) {
        this.personRoles[id] = [];
        this.nameLookup[id] = member['person']['full_name'];
        this.divisionsLookup[id] = member['person']['divisions'];
      }
      this.personRoles[id].push(member['role']['name']);
    }
  }
}
