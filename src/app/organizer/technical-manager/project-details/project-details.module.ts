import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDetailsRoutingModule } from './project-details-routing.module';
import { HomeComponent } from './home/home.component';
import { AddProjectDetailsComponent } from './add-project-details/add-project-details.component';
import { ViewProjectDetailsComponent } from './view-project-details/view-project-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    AddProjectDetailsComponent,
    ViewProjectDetailsComponent,

  ],
  imports: [
    CommonModule,
    ProjectDetailsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProjectDetailsModule { }
