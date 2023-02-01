import { Component } from '@angular/core';
import { Router } from '@angular/router';

class NavLink {
  constructor(public path: string, public label: string) { }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  title = 'app';
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Add Technical Calendar',
        link: './add',
        index: 0
      }, 
      {
        label: 'View Technical Calendar',
        link: './view',
        index: 1
      }
    ];
  }

}
