import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './app.material.module';
import { ErrorPagesModule } from '@uoa/error-pages';
import { GraphQLModule } from './graphql.module';

import { HeaderComponent } from './header/header.component';
import { FaqsPanelComponent } from './faqs-panel/faqs-panel.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FaqsPanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    LayoutModule,
    ErrorPagesModule,
    GraphQLModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    LayoutModule,
    ErrorPagesModule,
    GraphQLModule,
    HeaderComponent,
    FaqsPanelComponent
  ]
})
export class SharedModule { }
