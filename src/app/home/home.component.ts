import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Accolite Graduate Management System';
  show = false;
  constructor(private route : Router){}

  dropOrganizer() : void {
    this.show = !this.show;
    console.log("i have been clicked i will show organizer");
  }
  loadGraduate(){
    console.log("i have been clicked")
    this.route.navigate(['/graduate'])
  }
}
