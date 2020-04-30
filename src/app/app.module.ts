import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IonicStorageModule } from '@ionic/storage';
import { AuthModule, CognitoConfigService } from '@uoa/auth';
import { AppAuthConfigService } from './services/app-auth-config.service';
import { ErrorPagesModule } from '@uoa/error-pages';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthModule, 
    IonicStorageModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ErrorPagesModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: CognitoConfigService, useClass: AppAuthConfigService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
