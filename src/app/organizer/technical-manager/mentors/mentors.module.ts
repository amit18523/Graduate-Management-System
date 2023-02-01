import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddMentorsComponent } from './add-mentors/add-mentors.component';
import { ViewMentorsComponent } from './view-mentors/view-mentors.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MatTabsModule } from '@angular/material/tabs';

import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';
import { MentorsRoutingModule } from './mentors-routing.module';


@NgModule({
  declarations: [
    AddMentorsComponent,
    ViewMentorsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MentorsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    WidgetsModule
  ]

  // ,
  // exports: [
  //   AddMentorsComponent,
  //   ViewMentorsComponent
  // ]
})
export class MentorsModule { }
