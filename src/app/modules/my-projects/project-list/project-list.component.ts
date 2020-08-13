import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {

  @Input() projects: [];

  constructor(private router: Router) { }

  openProject(projectId) {
    this.router.navigateByUrl(`/my-projects/${projectId}`);
  }

}
