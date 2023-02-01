import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';
import { AddProjectRoutingModule } from './add-project-routing.module';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
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
    AddProjectRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatTabsModule,
    WidgetsModule,
  
  ]
})
export class AddProjectModule { }
