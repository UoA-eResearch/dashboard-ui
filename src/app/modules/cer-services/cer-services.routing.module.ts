import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CerServicesComponent } from './cer-services.component';
import { DropboxComponent } from './dropbox/dropbox.component';
import { DropboxDetailsComponent } from './dropbox/dropbox-details/dropbox-details.component';
import { OnlyServiceMembersGuard } from '@app/guard/only-service-members.guard';


const routes: Routes = [
  {
    path: '',
    component: CerServicesComponent,
    children: [
      {
        path: 'dropbox',
        component: DropboxComponent
      },
      {
        path: 'dropbox/:id',
        canActivate: [OnlyServiceMembersGuard],
        component: DropboxDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CerServiceRoutingModule { }