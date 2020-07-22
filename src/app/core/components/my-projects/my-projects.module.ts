import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyProjectsComponent } from './my-projects.component';
import { SharedModule } from './../../../shared/shared.module';


@NgModule({
  declarations: [MyProjectsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: MyProjectsComponent
      }
    ]), 
  ],
  exports: [MyProjectsComponent]
})
export class MyProjectsModule { }
