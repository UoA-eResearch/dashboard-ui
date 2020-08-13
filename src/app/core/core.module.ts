import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppAuthConfigService } from './service/app-auth-config.service';
import { AppStorageService } from './service/app-storage.service';
import { AuthModule, CognitoConfigService, StorageService } from '@uoa/auth';
import { OnlyProjectMembersGuard } from './guard/only-project-members.guard';


@NgModule({
  imports: [
    AuthModule,
    HttpClientModule
  ],
  providers: [
    { provide: CognitoConfigService, useClass: AppAuthConfigService },
    { provide: StorageService, useClass: AppStorageService },
    OnlyProjectMembersGuard
  ],
  exports: [
  ]
})
export class CoreModule { }
