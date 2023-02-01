import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraduateDetailGradMangRoutingModule } from './graduate-detail-grad-mang-routing.module';
import { HomeComponent } from './home/home.component';
import { GraduateDetailsModule } from '../../technical-manager/graduate-details/graduate-details.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    GraduateDetailGradMangRoutingModule,
    GraduateDetailsModule
  ]
})
export class GraduateDetailGradMangModule { }
