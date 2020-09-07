import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CerServicesComponent } from './cer-services.component';
import { DropboxListComponent } from './dropbox/dropbox-list/dropbox-list.component';
import { DropboxDetailsComponent } from './dropbox/dropbox-details/dropbox-details.component';
import { OnlyServiceMembersGuard } from '@app/guard/only-service-members.guard';
import { NectarListComponent } from './nectar/nectar-list/nectar-list.component';
import { NectarDetailsComponent } from './nectar/nectar-details/nectar-details.component';
import { ResearchStorageListComponent } from './research-storage/research-storage-list/research-storage-list.component';
import { ResearchStorageDetailsComponent } from './research-storage/research-storage-details/research-storage-details.component';
import { ResearchVmListComponent } from './research-vm/research-vm-list/research-vm-list.component';
import { ResearchVmDetailsComponent } from './research-vm/research-vm-details/research-vm-details.component';
import { VisualisationListComponent } from './visualisation/visualisation-list/visualisation-list.component';
import { VisualisationDetailsComponent } from './visualisation/visualisation-details/visualisation-details.component';


const routes: Routes = [
  {
    path: '',
    component: CerServicesComponent,
    children: [
      {
        path: 'dropbox',
        component: DropboxListComponent
      },
      {
        path: 'dropbox/:id',
        canActivate: [OnlyServiceMembersGuard],
        component: DropboxDetailsComponent
      },
      {
        path: 'nectar',
        component: NectarListComponent
      },
      {
        path: 'nectar/:id',
        canActivate: [OnlyServiceMembersGuard],
        component: NectarDetailsComponent
      },
      {
        path: 'research-storage',
        component: ResearchStorageListComponent
      },
      {
        path: 'research-storage/:id',
        canActivate: [OnlyServiceMembersGuard],
        component: ResearchStorageDetailsComponent
      },
      {
        path: 'research-vm',
        component: ResearchVmListComponent
      },
      {
        path: 'research-vm/:id',
        canActivate: [OnlyServiceMembersGuard],
        component: ResearchVmDetailsComponent
      },
      {
        path: 'visualisation',
        component: VisualisationListComponent
      },
      {
        path: 'visualisation/:id',
        canActivate: [OnlyServiceMembersGuard],
        component: VisualisationDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CerServiceRoutingModule { }
