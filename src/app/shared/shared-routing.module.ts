import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { CurriculumViewComponent } from './curriculum-view/curriculum-view.component';
import { GraduateDetailsComponent } from './graduate-details/graduate-details.component';
import { SharedDashBoardComponent } from './shared-dash-board/shared-dash-board.component';

const routes: Routes = [
  {
    path: 'path',
    component : CalendarViewComponent
  },
  {
    path: 'curriculum',
    component : CurriculumViewComponent
  },
  {
    path: 'graduateDetails',
    component : GraduateDetailsComponent
  },
  {
    path : '',
    component : SharedDashBoardComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
