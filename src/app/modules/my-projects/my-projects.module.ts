import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProjectsComponent } from './my-projects.component';
import { MyProjectsRoutingModule } from './my-projects-routing.module';
import { SharedModule } from '@shared/shared.module';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';


@NgModule({
  declarations: [MyProjectsComponent, ProjectComponent, ProjectListComponent],
  imports: [
    CommonModule,
    MyProjectsRoutingModule,
    SharedModule
  ],
  exports: [MyProjectsComponent]
})
export class MyProjectsModule { }
