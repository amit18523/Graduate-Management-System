import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddJobComponent } from './add-job/add-job.component';
import { HomeComponent } from './home/home.component';
import { ViewJobComponent } from './view-job/view-job.component';

const routes: Routes = [ 
  {
    path : '',
    component : HomeComponent,
    children :[
      {
        path: '',
        redirectTo:'add',
        pathMatch: 'full'
      },
      {
        path : 'add',
        component : AddJobComponent
      },
      {
        path : 'view',
        component : ViewJobComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { 

}
