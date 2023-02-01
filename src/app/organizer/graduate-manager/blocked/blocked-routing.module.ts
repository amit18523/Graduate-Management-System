import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddblockedComponent } from './addblocked/addblocked.component';
import { ViewblockedComponent } from './viewblocked/viewblocked.component';
import { HomeComponent } from './home/home.component';
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
        component : AddblockedComponent
      },
      {
        path : 'view',
        component : ViewblockedComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockedRoutingModule { }
