import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-batch',
  templateUrl: './home-batch.component.html',
  styleUrls: ['./home-batch.component.scss']
})
export class HomeBatchComponent {
  navLinks: any[];
  activeLinkIndex = -1;


  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Add Batch',
        link: './add',
        index: 0
      }, 
      {
        label: 'View Batch',
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
