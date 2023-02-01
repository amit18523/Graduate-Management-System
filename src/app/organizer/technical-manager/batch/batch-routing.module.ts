import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeBatchComponent } from './home-batch/home-batch.component';
import { AddBatchComponent } from './add-batch/add-batch.component';
import { ViewBatchComponent } from './view-batch/view-batch.component';
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [
  {
    path : '',
    component : HomeBatchComponent,
    children : [
      {
        path: '',
        redirectTo: 'add',
        pathMatch : 'full'
      },
      {
        path : 'add',
        component : AddBatchComponent
      },
      {
        path : 'view',
        component : ViewBatchComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BatchRoutingModule { }
