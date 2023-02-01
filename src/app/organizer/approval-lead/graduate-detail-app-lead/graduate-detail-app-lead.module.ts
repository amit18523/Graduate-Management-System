import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraduateDetailAppLeadRoutingModule } from './graduate-detail-app-lead-routing.module';
import { HomeComponent } from './home/home.component';
import { GraduateDetailsModule } from '../../technical-manager/graduate-details/graduate-details.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    GraduateDetailAppLeadRoutingModule,
    GraduateDetailsModule
  ]
})
export class GraduateDetailAppLeadModule { }
