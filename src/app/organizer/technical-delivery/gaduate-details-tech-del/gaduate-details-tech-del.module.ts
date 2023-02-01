import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraduateDetailsModule } from '../../technical-manager/graduate-details/graduate-details.module';
import { GaduateDetailsTechDelRoutingModule } from './gaduate-details-tech-del-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    GaduateDetailsTechDelRoutingModule,
    GraduateDetailsModule
  ]
})
export class GaduateDetailsTechDelModule { }
