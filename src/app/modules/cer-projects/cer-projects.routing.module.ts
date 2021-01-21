import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CerProjectsComponent } from './cer-projects.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';


/*********************************************************
  Some routes temporarily deactivated for Dashboard MVP1
*********************************************************/

const routes: Routes = [
  // {
  //   path: '',
  //   component: CerProjectsComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: ProjectListComponent
  //     },
  //     {
  //       path: ':id',
  //       component: ProjectDetailsComponent
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CerProjectRoutingModule { }
