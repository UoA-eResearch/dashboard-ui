import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CerServicesComponent } from './cer-services.component';
import { DropboxListComponent } from './dropbox/dropbox-list.component';
import { DropboxDetailsComponent } from './dropbox/dropbox-details/dropbox-details.component';
import { OnlyServiceMembersGuard } from '@app/guard/only-service-members.guard';
import { OnlyAdminGuard } from '@app/guard/only-admin.guard';


const routes: Routes = [
  {
    path: '',
    component: CerServicesComponent,
    children: [
      {
        path: 'dropbox',
        canActivate: [OnlyAdminGuard],
        component: DropboxListComponent
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