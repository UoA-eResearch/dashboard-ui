import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyServicesComponent } from './my-services.component';

const routes: Routes = [
  {
    path: '',
    component: MyServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyServicesRoutingModule {}
