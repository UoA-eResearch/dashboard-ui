import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectMembersListFormatOptions } from '@shared/project-member-list/project-member-list-format-options';

@Component({
  selector: 'app-my-projects-list',
  templateUrl: './my-projects-list.component.html',
  styleUrls: ['./my-projects-list.component.scss']
})
export class MyProjectsListComponent {

  @Input() projects: Array<object>;
  projectMembersListFormatOptions = ProjectMembersListFormatOptions;

  constructor(private router: Router) { }

  openProject(projectId) {
    this.router.navigateByUrl(`/project/${projectId}`);
  }
}
