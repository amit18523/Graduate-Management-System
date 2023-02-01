import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CoreGuard } from './shared/core/core.guard';
import { TechMangGuard } from './shared/core/tech-mang.guard';
import { TechDevGuard } from './shared/core/tech-dev.guard';
import { ApprovalleadGuard } from './shared/core/approvallead.guard';
import { OtherGuard } from './shared/core/other.guard';
import { GradMangGuard } from './shared/core/grad-mang.guard';

const routes: Routes = [

  // {
  //   path: 'home',
  //   component: HomeComponent,
  // },
  {
    path : '',
    redirectTo:'login',
    pathMatch : 'full'
  },
  {
    path : 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path : 'shared',
    loadChildren: () =>
      import('./shared/shared.module').then((m) => m.SharedModule),
  }
  ,
  {
    path: 'graduate',
    canActivate : [CoreGuard],
    loadChildren: () =>
      import('./graduate/graduate.module').then((m) => m.GraduateModule),
  },
  {
    path: 'technicalManager',
    canActivate : [TechMangGuard],

    loadChildren: () =>
      import('./organizer/technical-manager/technical-manager.module').then((m) => m.TechnicalManagerModule),
  },
  {
    path: 'technicalDelivery',
    canActivate : [TechDevGuard],

    loadChildren: () =>
      import('./organizer/technical-delivery/technical-delivery.module').then((m) => m.TechnicalDeliveryModule),
  },
  {
    path: 'approvalLead',
    canActivate : [ApprovalleadGuard],

    loadChildren: () =>
      import('./organizer/approval-lead/approval-lead.module').then((m) => m.ApprovalLeadModule),
  },
  {
    path: 'graduateManager',
    canActivate : [GradMangGuard],
 
    loadChildren: () =>
      import('./organizer/graduate-manager/graduate-manager.module').then((m) => m.GraduateManagerModule),
  },
  {
    path: 'others',
    canActivate : [OtherGuard],
   
    loadChildren: () =>
      import('./organizer/others/others.module').then((m) => m.OthersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
