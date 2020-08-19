import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CerServiceRoutingModule } from './cer-services.routing.module'; 
import { CerServicesComponent } from './cer-services.component';
import { DropboxListComponent } from './dropbox/dropbox-list/dropbox-list.component';
import { DropboxDetailsComponent } from './dropbox/dropbox-details/dropbox-details.component';
import { NectarListComponent } from './nectar/nectar-list/nectar-list.component';
import { NectarDetailsComponent } from './nectar/nectar-details/nectar-details.component';
import { ResearchStorageListComponent } from './research-storage/research-storage-list/research-storage-list.component';
import { ResearchStorageDetailsComponent } from './research-storage/research-storage-details/research-storage-details.component';
import { VisualisationDetailsComponent } from './visualisation/visualisation-details/visualisation-details.component';
import { VisualisationListComponent } from './visualisation/visualisation-list/visualisation-list.component';
import { ResearchVmListComponent } from './research-vm/research-vm-list/research-vm-list.component';
import { ResearchVmDetailsComponent } from './research-vm/research-vm-details/research-vm-details.component';


@NgModule({
  declarations: [
    CerServicesComponent,
    DropboxListComponent,
    DropboxDetailsComponent,
    NectarListComponent,
    NectarDetailsComponent,
    ResearchStorageListComponent,
    ResearchStorageDetailsComponent,
    VisualisationDetailsComponent,
    VisualisationListComponent,
    ResearchVmListComponent,
    ResearchVmDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CerServiceRoutingModule
  ]
})
export class CerServicesModule { }
