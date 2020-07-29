import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from '@app/core.component';
import { CoreRoutingModule  } from '@app/core-routing.module';
import { SharedModule } from '@shared/shared.module';
import { HomeModule } from './components/home/home.module';
import { MyProjectsModule } from './components/my-projects/my-projects.module';
import { MyServicesModule } from './components/my-services/my-services.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    CoreComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreRoutingModule,
    HomeModule,
    MyProjectsModule,
    MyServicesModule
  ],
  exports: [
    CoreComponent,
    SharedModule
  ]
})
export class CoreModule { }
