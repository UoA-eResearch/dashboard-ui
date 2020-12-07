import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmDeactivateGuard } from '@app/guard/confirm-deactivate.guard';
import { CerServicesComponent } from './cer-services.component';
import { DropboxListComponent } from './dropbox/dropbox-list/dropbox-list.component';
import { DropboxDetailsComponent } from './dropbox/dropbox-details/dropbox-details.component';
import { NectarListComponent } from './nectar/nectar-list/nectar-list.component';
import { NectarDetailsComponent } from './nectar/nectar-details/nectar-details.component';
import { ResearchStorageListComponent } from './research-storage/research-storage-list/research-storage-list.component';
import { ResearchStorageDetailsComponent } from './research-storage/research-storage-details/research-storage-details.component';
import { ResearchVmListComponent } from './research-vm/research-vm-list/research-vm-list.component';
import { ResearchVmDetailsComponent } from './research-vm/research-vm-details/research-vm-details.component';
import { VisualisationListComponent } from './visualisation/visualisation-list/visualisation-list.component';
import { VisualisationDetailsComponent } from './visualisation/visualisation-details/visualisation-details.component';
import { RequestStorageComponent } from './request-storage/request-storage.component';
import { RequestVmComponent } from './request-vm/request-vm.component';


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
        component: DropboxDetailsComponent
      },
      {
        path: 'nectar',
        component: NectarListComponent
      },
      {
        path: 'nectar/:id',
        component: NectarDetailsComponent
      },
      {
        path: 'research-storage',
        component: ResearchStorageListComponent
      },
      {
        path: 'research-storage/request',
        component: RequestStorageComponent,
        canDeactivate: [ConfirmDeactivateGuard]
      },
      {
        path: 'research-storage/:id',
        component: ResearchStorageDetailsComponent
      },
      {
        path: 'research-vm',
        component: ResearchVmListComponent
      },
      {
        path: 'research-vm/request',
        component: RequestVmComponent,
        canDeactivate: [ConfirmDeactivateGuard]
      },
      {
        path: 'research-vm/:id',
        component: ResearchVmDetailsComponent
      },
      {
        path: 'visualisation',
        component: VisualisationListComponent
      },
      {
        path: 'visualisation/:id',
        component: VisualisationDetailsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CerServiceRoutingModule { }
