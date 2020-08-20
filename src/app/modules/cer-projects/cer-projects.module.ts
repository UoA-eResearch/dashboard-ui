import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CerProjectsComponent } from './cer-projects.component';
import { CerProjectRoutingModule } from './cer-projects.routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';


@NgModule({
  declarations: [CerProjectsComponent, ProjectListComponent, ProjectDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    CerProjectRoutingModule
  ]
})
export class CerProjectsModule { }
