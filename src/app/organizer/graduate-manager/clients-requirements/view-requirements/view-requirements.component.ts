import { Component } from '@angular/core';
import { ClientrequirementsService } from '../clientrequirements.service';

@Component({
  selector: 'app-view-requirements',
  templateUrl: './view-requirements.component.html',
  styleUrls: ['./view-requirements.component.scss']
})
export class ViewRequirementsComponent {
  constructor(private clientRequirementsService : ClientrequirementsService) {}

  dataSource:any;
  ngOnInit(): void {
    this.clientRequirementsService.getClientRequirements()
    .subscribe(data => {
      this.dataSource = data;
    });
    // this.feedback.getFeedback()
    // .subscribe(data => {
    //   this.dataSource = data;
    // })
  }
  columns = [
    //{ columnDef: 'id', header: 'Project Calender Id',    cell: (element: any) => `${element.projectCalendarId}` },
    { columnDef: 'batchName',   header: 'Batch Name', cell: (element: any) => `${element.batchName}`  },
    { columnDef: 'jobId',   header: 'Job ID', cell: (element: any) => `${element.jobId}`  },
    { columnDef: 'client',   header: 'Client', cell: (element: any) => `${element.client}` }, 
    { columnDef: 'vertical',   header: 'Vertical', cell: (element: any) => `${element.vertical}` }, 
    { columnDef: 'noOfPositions',   header: 'Number of Openings', cell: (element: any) => `${element.noOfPositions}`},
    { columnDef: 'stakeholder',     header: 'Stakeholder Name',   cell: (element: any) => `${element.stakeholder}`},
    { columnDef: 'department',   header: 'Department Name', cell: (element: any) => `${element.department}` }, 
    { columnDef: 'location',   header: 'Location', cell: (element: any) => `${element.location}` }, 
    { columnDef: 'gender',   header: 'Gender', cell: (element: any) => `${element.gender}` }, 
    
    
   
   
    
   
   
 
  ];

}
