import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculumViewRoutingModule } from './curriculum-view-routing.module';
import { CurriculumDesignModule } from '../../technical-delivery/curriculum-design/curriculum-design.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CurriculumViewRoutingModule,
    CurriculumDesignModule,
    
  ]
})
export class CurriculumViewModule { }
