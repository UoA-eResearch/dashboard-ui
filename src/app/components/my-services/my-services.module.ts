import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyServicesComponent } from './my-services.component';
import { MyServicesRoutingModule } from './my-services-routing.module';
import { MaterialModule } from 'src/app/app.material.module';


@NgModule({
  declarations: [MyServicesComponent],
  imports: [
    CommonModule, MyServicesRoutingModule, MaterialModule
  ]
})
export class MyServicesModule { }
