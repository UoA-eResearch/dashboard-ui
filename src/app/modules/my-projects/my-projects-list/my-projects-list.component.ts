import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-projects-list',
  templateUrl: './my-projects-list.component.html',
  styleUrls: ['./my-projects-list.component.scss']
})
export class MyProjectsListComponent {

  @Input() projects: Array<object>;

  constructor(private router: Router) { }

  openProject(projectId) {
    this.router.navigateByUrl(`/project/${projectId}`);
  }
}
