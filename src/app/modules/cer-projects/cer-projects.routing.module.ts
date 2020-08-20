import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CerProjectsComponent } from './cer-projects.component';
import { OnlyAdminGuard } from '@app/guard/only-admin.guard';
import { OnlyProjectMembersGuard } from '@app/guard/only-project-members.guard';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';


const routes: Routes = [
  {
    path: '',
    component: CerProjectsComponent,
    children: [
      {
        path: '',
        canActivate: [OnlyAdminGuard],
        component: ProjectListComponent
      },
      {
        path: ':id',
        canActivate: [OnlyProjectMembersGuard],
        component: ProjectDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CerProjectRoutingModule { }
