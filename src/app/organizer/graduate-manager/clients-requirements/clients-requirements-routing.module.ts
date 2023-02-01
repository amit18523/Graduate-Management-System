import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddRequirementsComponent } from './add-requirements/add-requirements.component';
import { ViewRequirementsComponent } from './view-requirements/view-requirements.component';
const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    children : [
      {
        path : '',
        redirectTo : 'add',
        pathMatch : 'full'
      },
      {
        path : 'add',
        component : AddRequirementsComponent
      },
      {
        path : 'view',
        component : ViewRequirementsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRequirementsRoutingModule { }
