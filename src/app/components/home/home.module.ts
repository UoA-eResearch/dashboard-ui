import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HomeDashComponent } from './home-dash/home-dash.component';
import { MaterialModule } from '../../app.material.module';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [HomeComponent, HomeDashComponent],
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
    HomeDashComponent
  ]
})
export class HomeModule { }