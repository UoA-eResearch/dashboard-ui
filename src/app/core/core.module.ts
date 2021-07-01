import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppAuthConfigService } from './service/app-auth-config.service';
import { AppStorageService } from './service/app-storage.service';
import { AuthModule, CognitoConfigService, StorageService } from '@uoa/auth';
import { AuthCookiesInterceptor } from './interceptor/auth-cookies.interceptor';

@NgModule({
  imports: [
    AuthModule,
    HttpClientModule
  ],
  providers: [
    { provide: CognitoConfigService, useClass: AppAuthConfigService },
    { provide: StorageService, useClass: AppStorageService },
    { provide: HTTP_INTERCEPTORS, useClass: AuthCookiesInterceptor, multi: true }
  ],
  exports: [
  ]
})
export class CoreModule { }
