import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CerServiceRoutingModule } from './cer-services.routing.module';
import { CerServicesComponent } from './cer-services.component';
import { RequestStorageComponent } from './request-storage/request-storage.component';
import { RequestVmComponent } from './request-vm/request-vm.component';


@NgModule({
  declarations: [
    RequestStorageComponent,
    RequestVmComponent,
    CerServicesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CerServiceRoutingModule
  ]
})
export class CerServicesModule { }
