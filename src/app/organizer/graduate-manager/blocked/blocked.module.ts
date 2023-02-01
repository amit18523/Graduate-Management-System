import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockedRoutingModule } from './blocked-routing.module';
import { AddblockedComponent } from './addblocked/addblocked.component';
import { ViewblockedComponent } from './viewblocked/viewblocked.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table'  
import { CdkTableModule} from '@angular/cdk/table';

@NgModule({
  declarations: [
    AddblockedComponent,
    ViewblockedComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    BlockedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,
    WidgetsModule,
    MatCheckboxModule,
    MatTableModule,
    CdkTableModule
  ]
})
export class BlockedModule { }
