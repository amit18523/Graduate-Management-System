import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCalendarComponent } from './add-calendar/add-calendar.component';
import { HomeComponent } from './home/home.component';
import { ViewCalendarComponent } from './view-calendar/view-calendar.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    children : [
      {
        path: '',
        redirectTo:'add',
        pathMatch: 'full'
      },
      {
        path: 'add',
        component: AddCalendarComponent
      },
      {
        path: 'view',
        component: ViewCalendarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicalClalenderRoutingModule { }
