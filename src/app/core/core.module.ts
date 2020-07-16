import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { CoreRoutingModule  } from './core-routing.module';
import { MaterialModule } from './../app.material.module';
import { LayoutModule } from '@angular/cdk/layout';

import { HomeModule } from './components/home/home.module';
import { MyProjectsModule } from './components/my-projects/my-projects.module';
import { MyServicesModule } from './components/my-services/my-services.module';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [CoreComponent, NavbarComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule,
    LayoutModule,
    HomeModule,
    MyProjectsModule,
    MyServicesModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
