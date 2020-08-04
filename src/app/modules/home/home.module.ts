import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeDashBoardComponent } from './home-dashboard/home-dashboard.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeDashBoardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class HomeModule { }
