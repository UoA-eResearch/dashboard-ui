import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProjectsComponent } from './my-projects.component';
import { MyProjectsRoutingModule } from './my-projects-routing.module';
import { MaterialModule } from 'src/app/app.material.module';


@NgModule({
  declarations: [MyProjectsComponent],
  imports: [
    CommonModule, MyProjectsRoutingModule, MaterialModule
  ],
  exports: [MyProjectsComponent]
})
export class MyProjectsModule { }
