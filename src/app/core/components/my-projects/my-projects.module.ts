import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyProjectsComponent } from './my-projects.component';
import { MaterialModule } from 'src/app/app.material.module';


@NgModule({
  declarations: [MyProjectsComponent],
  imports: [
    CommonModule,
    MaterialModule,
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
