import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyServicesComponent } from './my-services.component';
import { MaterialModule } from 'src/app/app.material.module';


@NgModule({
  declarations: [MyServicesComponent],
  imports: [
    CommonModule,
    MaterialModule,
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
