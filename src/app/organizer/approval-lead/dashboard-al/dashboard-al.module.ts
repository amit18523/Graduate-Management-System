import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardAlRoutingModule } from './dashboard-al-routing.module';
import { DashboardHomeAlComponent } from './dashboard-home-al/dashboard-home-al.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DashboardHomeAlComponent
  ],
  imports: [
    CommonModule,
    DashboardAlRoutingModule,
    SharedModule
  ]
})
export class DashboardAlModule { }
