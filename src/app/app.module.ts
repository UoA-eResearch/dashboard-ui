import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';

import { StorageServiceModule } from 'ngx-webstorage-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './app.material.module';

import { AuthModule, CognitoConfigService } from 'uoa-auth-angular';
import { AppAuthConfigService } from './services/app-auth-config.service';
import { ErrorPagesModule } from 'uoa-error-pages-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GraphQLModule } from './graphql.module';

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
    StorageServiceModule,
    HttpClientModule,
    MaterialModule,
    GraphQLModule
  ],
  providers: [
    { provide: CognitoConfigService, useClass: AppAuthConfigService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
