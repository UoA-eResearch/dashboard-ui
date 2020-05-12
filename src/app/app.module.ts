import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { StorageServiceModule } from 'ngx-webstorage-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule, CognitoConfigService } from 'uoa-auth-angular';
import { AppAuthConfigService } from './services/app-auth-config.service';
import { ErrorPagesModule } from 'uoa-error-pages-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    ErrorPagesModule,
    BrowserAnimationsModule,
    StorageServiceModule
  ],
  providers: [
    { provide: CognitoConfigService, useClass: AppAuthConfigService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
