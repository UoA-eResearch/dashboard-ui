import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './app.material.module';
import { ErrorPagesModule } from '@uoa/error-pages';

import { HeaderComponent } from './header/header.component';
import { FaqsPanelComponent } from './faqs-panel/faqs-panel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GroupMemberListComponent } from './group-member-list/group-member-list.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FaqsPanelComponent,
    PageNotFoundComponent,
    GroupMemberListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    LayoutModule,
    ErrorPagesModule
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
    GroupMemberListComponent
  ]
})
export class SharedModule { }
