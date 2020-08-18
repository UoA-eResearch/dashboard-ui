import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CerServiceRoutingModule } from './cer-services.routing.module'; 
import { CerServicesComponent } from './cer-services.component';
import { DropboxListComponent } from './dropbox/dropbox-list.component';
import { DropboxDetailsComponent } from './dropbox/dropbox-details/dropbox-details.component';


@NgModule({
  declarations: [CerServicesComponent, DropboxListComponent, DropboxDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    CerServiceRoutingModule
  ]
})
export class CerServicesModule { }
