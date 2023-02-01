import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddBuddyComponent } from './add-buddy/add-buddy.component';

import { MatTabsModule } from '@angular/material/tabs';
import { ViewBuddyComponent } from './view-buddy/view-buddy.component';
const routes: Routes = [
  {
    path : '',
    component : HomeComponent,
    children : [
      {
        path: '',
        redirectTo: 'add',
        pathMatch : 'full'
      },
      {
        path : 'add',
        component : AddBuddyComponent
      },
      {
        path : 'view',
        component : ViewBuddyComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuddyRoutingModule { }
