import { Component } from '@angular/core';
import { InterviewService } from '../interview.service';

@Component({
  selector: 'app-view-mock-interview',
  templateUrl: './view-mock-interview.component.html',
  styleUrls: ['./view-mock-interview.component.scss']
})
export class ViewMockInterviewComponent {
  constructor(private interviewService : InterviewService) {}

  dataSource:any;
  ngOnInit(): void {
    this.interviewService.getMockInterview()
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
    { columnDef: 'empId',   header: 'Employee ID', cell: (element: any) => `${element.empId}`  },
    { columnDef: 'batchName',   header: 'Batch Name', cell: (element: any) => `${element.batchName}`  },
    { columnDef: 'empName',   header: 'Employee Name', cell: (element: any) => `${element.empName}`  },
    { columnDef: 'interviewerName',   header: 'Interviewer Name', cell: (element: any) => `${element.interviewerName}`  },
    { columnDef: 'interviewDate',     header: 'Interview Date',   cell: (element: any) => `${element.interviewDate}`.split("T", 1)},
    { columnDef: 'time',   header: 'Interview Time', cell: (element: any) => `${element.time}` }
  ];


}
