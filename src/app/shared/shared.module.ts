import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { CurriculumViewComponent } from './curriculum-view/curriculum-view.component';
import { GraduateDetailsComponent } from './graduate-details/graduate-details.component';
import { SharedDashBoardComponent } from './shared-dash-board/shared-dash-board.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CalendarViewComponent,
    CurriculumViewComponent,
    GraduateDetailsComponent,
    SharedDashBoardComponent,


  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatGridListModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    RouterModule

  ],
  exports: [
    CalendarViewComponent,
    CurriculumViewComponent,
    GraduateDetailsComponent,
    SharedDashBoardComponent,
  ]
})
export class SharedModule { }
