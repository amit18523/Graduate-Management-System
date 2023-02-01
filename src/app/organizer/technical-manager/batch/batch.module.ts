import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BatchRoutingModule } from './batch-routing.module';
import { AddBatchComponent } from './add-batch/add-batch.component';
import { HomeBatchComponent } from './home-batch/home-batch.component';
import { ViewBatchComponent } from './view-batch/view-batch.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { WidgetsModule } from 'src/app/shared/widgets/widgets.module';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AddBatchComponent,
    HomeBatchComponent,
    ViewBatchComponent
  ],
  imports: [
    CommonModule,
    BatchRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatTabsModule,  
    WidgetsModule,
    MatTableModule,
    MatCardModule,
    MatSnackBarModule
  ]
})
export class BatchModule { }
