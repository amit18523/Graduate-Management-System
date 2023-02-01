import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainningcurriculumRoutingModule } from './trainningcurriculum-routing.module';
import { HomeComponent } from './home/home.component';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';
import { MatTabsModule } from '@angular/material/tabs';
import {  RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    TrainningcurriculumRoutingModule,
    WidgetsModule,
    MatTableModule,
    MatSelectModule,
    MatFormFieldModule,
    
  ]
})
export class TrainningcurriculumModule { }
