import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { childRoutes } from './childroute.module';
import { CoreGuard } from '../shared/core/core.guard';

const routes: Routes = [
  {
    path :'',
    component : LayoutComponent,
    children : [
      {
        path: '',
        redirectTo: 'tranningCiriculum',
        pathMatch: 'full'
      },
      ...childRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraduateRoutingModule { }
