import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppAuthConfigService } from './service/app-auth-config.service';
import { AppStorageService } from './service/app-storage.service';
import { AppErrorsConfigService } from './service/app-errors-config.service';
import { AuthModule, CognitoConfigService, StorageService } from '@uoa/auth';
import { UoaErrorsConfig } from '@uoa/error-pages';

@NgModule({
  imports: [
    AuthModule,
    HttpClientModule
  ],
  providers: [
    { provide: CognitoConfigService, useClass: AppAuthConfigService },
    { provide: StorageService, useClass: AppStorageService },
    { provide: UoaErrorsConfig, useClass: AppErrorsConfigService }
  ],
  exports: [
  ]
})
export class CoreModule { }
