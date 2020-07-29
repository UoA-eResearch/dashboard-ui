import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyServicesComponent } from './my-services.component';
import { MyServicesRoutingModule } from './my-services-routing.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [MyServicesComponent],
  imports: [
    CommonModule,
    MyServicesRoutingModule,
    SharedModule
  ],
  exports: [MyServicesComponent]
})
export class MyServicesModule { }
