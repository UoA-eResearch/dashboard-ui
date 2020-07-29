import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProjectsComponent } from './my-projects.component';
import { MyProjectsRoutingModule } from './my-projects-routing.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [MyProjectsComponent],
  imports: [
    CommonModule,
    MyProjectsRoutingModule,
    SharedModule
  ],
  exports: [MyProjectsComponent]
})
export class MyProjectsModule { }
