import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeDashBoardComponent } from './home-dashboard/home-dashboard.component';
import { SharedModule } from './../../../shared/shared.module';

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
    SharedModule
  ],
  exports: [
    HomeComponent,
    HomeDashBoardComponent
  ]
})
export class HomeModule { }