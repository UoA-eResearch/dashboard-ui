import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../app.material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './../core/components/header/header.component';
import { FaqsPanelComponent } from './../core/components/faqs-panel/faqs-panel.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FaqsPanelComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    LayoutModule
  ],
  exports: [
    FlexLayoutModule,
    MaterialModule,
    LayoutModule,
    HeaderComponent,
    FaqsPanelComponent
  ]
})
export class SharedModule { }
