import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeDashBoardComponent } from './home-dashboard/home-dashboard.component';
import { MaterialModule } from './../../../app.material.module';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [HomeComponent, HomeDashBoardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ]),
    MaterialModule,
    LayoutModule
  ],
  exports: [
    HomeComponent,
    HomeDashBoardComponent
  ]
})
export class HomeModule { }