import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraduateRoutingModule } from './graduate-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutComponent } from './layout/layout.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LayoutComponent,
    SideNavComponent,
    TopNavComponent,
   

  ],
  imports: [
    CommonModule,
    GraduateRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    
  ]
})
export class GraduateModule { }
