import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraduateDetailsOthersRoutingModule } from './graduate-details-others-routing.module';
import { HomeComponent } from './home/home.component';
import { GraduateDetailsModule } from '../../technical-manager/graduate-details/graduate-details.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    GraduateDetailsOthersRoutingModule,
    GraduateDetailsModule
  ]
})
export class GraduateDetailsOthersModule { }
