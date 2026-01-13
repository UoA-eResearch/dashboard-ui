import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './app.material.module';
import { ErrorPagesModule } from '@uoa/error-pages';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { StripHtmlPipe } from './pipe/strip-html.pipe';
import { ReturnToHubComponent } from './return-to-hub/return-to-hub.component';
import { AcceptableUseDialogComponent } from './acceptable-use-dialog/acceptable-use-dialog.component';


@NgModule({
  declarations: [
    HeaderComponent,
    PageNotFoundComponent,
    ConfirmDialogComponent,
    ErrorDialogComponent,
    StripHtmlPipe,
    ReturnToHubComponent,
    AcceptableUseDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    LayoutModule,
    ErrorPagesModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    LayoutModule,
    ErrorPagesModule,
    HeaderComponent,
    PageNotFoundComponent,
    ConfirmDialogComponent,
    ErrorDialogComponent,
    FormsModule,
    ReactiveFormsModule,
    StripHtmlPipe,
  ],
  entryComponents: [
    AcceptableUseDialogComponent
  ]
})
export class SharedModule { }
