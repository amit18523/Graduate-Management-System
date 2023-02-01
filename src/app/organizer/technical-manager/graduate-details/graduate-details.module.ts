import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraduateDetailsRoutingModule } from './graduate-details-routing.module';
import { HomeComponent } from './home/home.component';
import { AddGrauateComponent } from './add-grauate/add-grauate.component';
import { ViewGraduateComponent } from './view-graduate/view-graduate.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';

import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';

@NgModule({
  declarations: [
    HomeComponent,
    AddGrauateComponent,
    ViewGraduateComponent
  ],
  imports: [
    CommonModule,
    GraduateDetailsRoutingModule,
    MatTabsModule,
    ReactiveFormsModule,
    WidgetsModule
  ],
  exports : [
    ViewGraduateComponent
  ]
})
export class GraduateDetailsModule { }
