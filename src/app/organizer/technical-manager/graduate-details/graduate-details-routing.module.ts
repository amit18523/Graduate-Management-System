import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddGrauateComponent } from './add-grauate/add-grauate.component';
import { ViewGraduateComponent } from './view-graduate/view-graduate.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'add',
        pathMatch: 'full'
      },
      {
        path: 'add',
        component: AddGrauateComponent
      },
      {
        path: 'view',
        component: ViewGraduateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraduateDetailsRoutingModule { }
