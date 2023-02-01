import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrannierAssignrRoutingModule } from './trannier-assignr-routing.module';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';


@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    TrannierAssignrRoutingModule,
    ReactiveFormsModule,

    MatTabsModule,
    WidgetsModule
    
  ]
})
export class TrannierAssignrModule { }
