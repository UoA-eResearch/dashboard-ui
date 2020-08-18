import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CerServiceRoutingModule } from './cer-services.routing.module'; 
import { CerServicesComponent } from './cer-services.component';
import { DropboxListComponent } from './dropbox/dropbox-list.component';
import { DropboxDetailsComponent } from './dropbox/dropbox-details/dropbox-details.component';
import { NectarListComponent } from './nectar/nectar-list/nectar-list.component';
import { NectarDetailsComponent } from './nectar/nectar-details/nectar-details.component';


@NgModule({
  declarations: [
    CerServicesComponent,
    DropboxListComponent,
    DropboxDetailsComponent,
    NectarListComponent,
    NectarDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CerServiceRoutingModule
  ]
})
export class CerServicesModule { }
