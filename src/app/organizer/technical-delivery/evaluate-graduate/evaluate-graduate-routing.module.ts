import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddEvaluationComponent } from './add-evaluation/add-evaluation.component';
import { ViewEvaluationComponent } from './view-evaluation/view-evaluation.component';

const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'addEvalution',
        pathMatch : 'full'
      },
      {
        path: 'addEvalution',
        component: AddEvaluationComponent
      },
      {
        path: 'viewEvalution',
        component: ViewEvaluationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EvaluateGraduateRoutingModule { }
