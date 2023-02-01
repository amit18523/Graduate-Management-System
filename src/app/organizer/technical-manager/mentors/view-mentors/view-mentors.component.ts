import { Component } from '@angular/core';
import { MentorServiceService } from '../mentor-service.service';
@Component({
  selector: 'app-view-mentors',
  templateUrl: './view-mentors.component.html',
  styleUrls: ['./view-mentors.component.scss']
})
export class ViewMentorsComponent {

  constructor(private mentorsService:MentorServiceService){}

  dataSource:any;

  ngOnInit(): void {
    this.mentorsService.getMentors()
    .subscribe(data => {
      this.dataSource = data;
    });
    // this.feedback.getFeedback()
    // .subscribe(data => {
    //   this.dataSource = data;
    // })
  }

  // selectBatchId:[''],
  // selectEmpIdGrad:[''],
  // selectEmpIdMentor:[''],
  // clientProjectName:[''],
  // stakeholderName:[''],
  // client:['']
  //{"mentorId":8,"batchId":0,"batchName":null,"empIdGrad":0,"empIdMentor":0,"gradName":null,"mentorName":null,"clientProjectName":"Stock Market","stakeholderName":"Rambabu","client":"MS","batchesList":[],"employeeIdGrad":[],"employeeIdMentor":[]}]

  columns = [
    { columnDef: 'batchName', header: 'Batch Name',    cell: (element: any) => `${element.batchName}` },
    { columnDef: 'id', header: 'GradEmpId',    cell: (element: any) => `${element.empIdGrad}` },
    { columnDef: 'title',  header: 'MentorEmpId',   cell: (element: any) => `${element.empIdMentor}`},
    { columnDef: 'gradName',   header: 'Grad Name', cell: (element: any) => `${element.gradName}`   },
    { columnDef: 'mentorName',   header: 'Mentor Name', cell: (element: any) => `${element.mentorName}`   },
    { columnDef: 'clientName',   header: 'Client Project Name', cell: (element: any) => `${element.clientProjectName}`   },
    { columnDef: 'stackeholder',   header: 'Stakeholder', cell: (element: any) => `${element.stakeholderName}`   },
    { columnDef: 'client',   header: 'Client', cell: (element: any) => `${element.client}`   }
  ];



}
