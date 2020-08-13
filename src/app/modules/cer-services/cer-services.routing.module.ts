import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CerServicesComponent } from './cer-services.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CerServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CerServiceRoutingModule { }