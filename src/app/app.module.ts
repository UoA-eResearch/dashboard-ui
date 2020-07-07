import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './app.material.module';

import { AuthModule, CognitoConfigService, StorageService } from '@uoa/auth';
import { AppAuthConfigService } from './services/app-auth-config.service';
import { AppStorageService } from './services/app-storage.service';
import { ErrorPagesModule } from '@uoa/error-pages';
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
    HttpClientModule,
    MaterialModule,
    GraphQLModule
  ],
  providers: [
    { provide: CognitoConfigService, useClass: AppAuthConfigService },
    { provide: StorageService, useClass: AppStorageService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
