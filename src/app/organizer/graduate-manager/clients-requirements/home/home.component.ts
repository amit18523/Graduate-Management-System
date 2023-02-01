import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  navLinks: any[];
  activeLinkIndex = -1;


  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Add Client Requirement',
        link: './add',
        index: 0
      }, 
      {
        label: 'View Client Requirement',
        link: './view',
        index: 1
      }
    ];
  }

  ngOnInit() {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
    });
  }

}
