import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-organizer',
  templateUrl: './organizer.component.html',
  styleUrls: ['./organizer.component.scss']
})
export class OrganizerComponent {
  constructor(private router: Router){

  }
  loadTechincalManager(){
    console.log("i have been clicked inside technical Manager");
    this.router.navigate(['/technicalManager']);
  }
  loadTechincalDelivery(){
    console.log("i am Technical Delivery");
    this.router.navigate(['/technicalDelivery']);
  }
  loadapprovalLead(){
    this.router.navigate(['/approvalLead']);
  }
  loadGraduateManager(){
    this.router.navigate(['/graduateManager']);
  }
  loadOthers(){
    this.router.navigate(['/others']);
  }
}
