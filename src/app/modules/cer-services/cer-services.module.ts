import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CerServiceRoutingModule } from './cer-services.routing.module'; 
import { CerServicesComponent } from './cer-services.component';
import { DropboxComponent } from './dropbox/dropbox.component';
import { DropboxDetailsComponent } from './dropbox/dropbox-details/dropbox-details.component';


@NgModule({
  declarations: [CerServicesComponent, DropboxComponent, DropboxDetailsComponent],
  imports: [
    CommonModule,
    SharedModule,
    CerServiceRoutingModule
  ]
})
export class CerServicesModule { }
