import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuddyRoutingModule } from './buddy-routing.module';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { AddBuddyComponent } from './add-buddy/add-buddy.component';
import { ViewBuddyComponent } from './view-buddy/view-buddy.component';
// import { RegistrationComponent } from './registration/registration.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';

@NgModule({
  declarations: [
    HomeComponent,
    AddBuddyComponent,
    ViewBuddyComponent

  ],
  imports: [
    CommonModule,
    BuddyRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    WidgetsModule
  ]
  // ,
  // exports : [
  //   AddBuddyComponent,
  //   ViewBuddyComponent
  // ]
})
export class BuddyModule { }
