import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { CoreModule } from '@app/core.module';
import { SharedModule } from '@shared/shared.module';
import { GraphQLModule } from './graphql.module';
import { ErrorPagesModule } from '@uoa/error-pages';

import { ContentLayoutComponent } from '@layout/content-layout/content-layout.component';
import { NavbarComponent } from '@layout/navbar/navbar.component';
import { FooterComponent } from '@layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    GraphQLModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ErrorPagesModule
  ],
  exports: [
    ContentLayoutComponent,
    NavbarComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
