import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarViewRoutingModule } from './calendar-view-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
 import { WidgetsModule } from "../../../shared/widgets/widgets.module";
import { TestComponent } from './test/test.component';
import { TechnicalClalenderModule } from '../../technical-manager/technical-clalender/technical-clalender.module';
 @NgModule({
    declarations: [
        HomeComponent,
        TestComponent
        
    ],
    imports: [
        CommonModule,
        CalendarViewRoutingModule,
        SharedModule,
        WidgetsModule,
        TechnicalClalenderModule
        
    ]
})
export class CalendarViewModule { }
