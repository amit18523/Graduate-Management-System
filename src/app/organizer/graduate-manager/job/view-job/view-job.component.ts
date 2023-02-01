import { Component } from '@angular/core';
import { JobService } from '../job.service';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.scss']
})

// {"jobId":300,"batchId":6000,"blockedId":0,
// "client":"MS","vertical":null,"requirement_id":0,
// "batchesList":[],"requirementsList":[],"blockedList":[],
// "interviewList":[]}

export class ViewJobComponent {

  constructor(private jobService:JobService) {}

  dataSource:any;

  ngOnInit(): void {

    this.jobService.getJob()
    .subscribe(data => {
      this.dataSource = data;
    });
    // this.feedback.getFeedback()
    // .subscribe(data => {
    //   this.dataSource = data;
    // })
  }

  // {"jobId":300,"batchId":6000,"blockedId":0,
// "client":"MS","vertical":null,"requirement_id":0,
// "batchesList":[],"requirementsList":[],"blockedList":[],
// "interviewList":[]}

  
//       batchId:[''],
//       client:[''],
//       vertical:[''],
//       openings:[''] 

columns = [
  { columnDef: 'batchName', header: 'Batch Name',    cell: (element: any) => `${element.batchName}` },
  { columnDef: 'client',   header: 'Client', cell: (element: any) => `${element.client}`   },
  { columnDef: 'vertical',   header: 'Vertical', cell: (element: any) => `${element.vertical}`   }
 
];



}
