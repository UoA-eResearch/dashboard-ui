import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyServicesComponent } from './my-services.component';
import { SharedModule } from './../../../shared/shared.module';


@NgModule({
  declarations: [MyServicesComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: MyServicesComponent
      }
    ]),
  ],
  exports: [MyServicesComponent]
})
export class MyServicesModule { }
