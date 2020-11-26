import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './app.material.module';
import { ErrorPagesModule } from '@uoa/error-pages';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FaqsPanelComponent } from './faqs-panel/faqs-panel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GroupMemberListComponent } from './group-member-list/group-member-list.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FaqsPanelComponent,
    PageNotFoundComponent,
    GroupMemberListComponent,
    ConfirmDialogComponent,
    ErrorDialogComponent
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
    FaqsPanelComponent,
    PageNotFoundComponent,
    GroupMemberListComponent,
    ConfirmDialogComponent,
    ErrorDialogComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule { }
