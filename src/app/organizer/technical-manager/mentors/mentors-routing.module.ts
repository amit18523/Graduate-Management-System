import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddBuddyComponent } from '../buddy/add-buddy/add-buddy.component';
import { AddMentorsComponent } from './add-mentors/add-mentors.component';
import { HomeComponent } from './home/home.component';
import { ViewMentorsComponent } from './view-mentors/view-mentors.component';
import { CoreGuard } from 'src/app/shared/core/core.guard';

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
        component : AddMentorsComponent
      },
      {
        path : 'view',
        component : ViewMentorsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorsRoutingModule { }
