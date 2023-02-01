import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeebackReceivedRoutingModule } from './feeback-received-routing.module';
import { HomeComponent } from './home/home.component';
import { GraduateModule } from 'src/app/graduate/graduate.module';
import { FeedbackModule } from 'src/app/graduate/feedback/feedback.module';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FeebackReceivedRoutingModule,
    GraduateModule,
    FeedbackModule,
    WidgetsModule,
    MatTableModule
  ]
})
export class FeebackReceivedModule { }
