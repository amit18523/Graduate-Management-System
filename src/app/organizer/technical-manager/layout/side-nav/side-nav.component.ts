import { Component } from '@angular/core';
import { childRoutes } from '../../childroute.module';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  routes = childRoutes;
  sideNavMode = false;
}
