import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyProjectsComponent } from './my-projects.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MyProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProjectsRoutingModule { }
