import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ClientsRequirementsRoutingModule } from './clients-requirements-routing.module';
import { AddRequirementsComponent } from './add-requirements/add-requirements.component';
import { ViewRequirementsComponent } from './view-requirements/view-requirements.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule} from '@angular/router';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';

@NgModule({
  declarations: [
    HomeComponent,
    AddRequirementsComponent,
    ViewRequirementsComponent
  ],
  imports: [
    CommonModule,
    ClientsRequirementsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    WidgetsModule,
    MatTabsModule
  ]
})
export class ClientsRequirementsModule { }
