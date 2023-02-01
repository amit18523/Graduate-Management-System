import { Component } from '@angular/core';
import { batchesGet } from 'src/backend.Data';
import { StatusServiceService } from '../status-service.service';
import { StatusData } from '../statusData';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showStausDiv = false;
  batches: batchesGet[];
  status: StatusData;
  value : any;
  statusApprovalCalendar : string;
  statusApprovalCurriculum : string;
  approvalCalendar :number = 0;
  approvalCurriculum :number = 0;
  constructor(private statusService: StatusServiceService) {

  }
  ngOnInit() {
    this.statusService.getStatus().subscribe(data => {
      this.batches = data;
    })

  }


  onChangeValue(newValue: any) {
    console.log(newValue);
    this.value = newValue;
    
  }
  getStatus() {
    this.statusService.getStatusbyBatch(this.value).subscribe(data => {
      this.status = data;
      setTimeout(() => {
        this.display();
        this.showStausDiv = true;
      }, 1000); 
    });
  }
  display(){
    
      this.approvalCalendar = this.status.techCalendar;
      if(this.approvalCalendar == 1){
        this.statusApprovalCalendar = 'Approved';
      } else if (this.approvalCalendar == 0){
        this.statusApprovalCalendar = 'Not Approved Yet'
      } else {
        this.statusApprovalCalendar = 'Disapproved'
      }
      this.approvalCurriculum = this.status.techCurriculum;
      if(this.approvalCurriculum == 1){
        this.statusApprovalCurriculum = 'Approved';
      } else if (this.approvalCurriculum == 0){
        this.statusApprovalCurriculum = 'Not Approved Yet'
      } else {
        this.statusApprovalCurriculum = 'Disapproved'
      }
 
  }
}
