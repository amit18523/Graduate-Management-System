import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculumApprovalRoutingModule } from './curriculum-approval-routing.module';
import { CurriculumDesignModule } from '../../technical-delivery/curriculum-design/curriculum-design.module';
import { HomeComponent } from './home/home.component';
import { ViewCirriculumapprovalleadComponent } from './view-cirriculumapprovallead/view-cirriculumapprovallead.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    HomeComponent,
    ViewCirriculumapprovalleadComponent
  ],
  imports: [
    CommonModule,
    CurriculumApprovalRoutingModule,
    CurriculumDesignModule,
    RouterModule
  ]
})
export class CurriculumApprovalModule { }
