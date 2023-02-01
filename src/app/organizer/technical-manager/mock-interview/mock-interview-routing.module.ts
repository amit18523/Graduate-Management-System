import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMockInterviewComponent } from './add-mock-interview/add-mock-interview.component';
import { HomeComponent } from './home/home.component';
import { ViewMockInterviewComponent } from './view-mock-interview/view-mock-interview.component';

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
        component : AddMockInterviewComponent
      },
      {
        path : 'view',
        component : ViewMockInterviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MockInterviewRoutingModule { }
