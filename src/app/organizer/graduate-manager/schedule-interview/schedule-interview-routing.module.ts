import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddInterviewComponent } from './add-interview/add-interview.component';
import { ViewInterviewComponent } from './view-interview/view-interview.component';
const routes: Routes = [
  {
    path :'',
    component :HomeComponent,
    children : [
      {
        path : '',
        redirectTo : 'add',
        pathMatch : 'full'
      },
      {
        path : 'add',
        component : AddInterviewComponent
      },
      {
        path : 'view',
        component : ViewInterviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleInterviewRoutingModule { }
