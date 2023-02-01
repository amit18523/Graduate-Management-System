import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { CalendarViewComponent } from 'src/app/shared/calendar-view/calendar-view.component';
const routes: Routes = [
  {
    path:'',
    component : HomeComponent
  },
  // {
  //   path: 'test',
  //   component: TestComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarViewRoutingModule { }
