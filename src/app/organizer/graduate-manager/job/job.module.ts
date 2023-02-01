import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobRoutingModule } from './job-routing.module';
import { AddJobComponent } from './add-job/add-job.component';
import { HomeComponent } from './home/home.component';
import { ViewJobComponent } from './view-job/view-job.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';


@NgModule({
  declarations: [
    AddJobComponent,
    HomeComponent,
    ViewJobComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    WidgetsModule
  ]
})
export class JobModule { }
