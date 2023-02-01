import { Component } from '@angular/core';
import { FeedbackService } from 'src/app/graduate/feedback/feedback.service';
import { GlobalService } from 'src/app/global.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private global : GlobalService) {}

  dataSource:any;
  ngOnInit(): void {
    this.global.getFeedback().subscribe(data=>{
      this.dataSource = data;
    })
    // this.feedback.getFeedback()
    // .subscribe(data => {
    //   this.dataSource = data;
    // })
  }
  columns = [
    //{ columnDef: 'id', header: 'Project Calender Id',    cell: (element: any) => `${element.projectCalendarId}` },
    { columnDef: 'empId',  header: 'Grad Id', cell: (element: any) => `${element.empId}`  },
    { columnDef: 'empName',  header: 'Grad Name', cell: (element: any) => `${element.empName}`  },
    { columnDef: 'feedback',  header: 'Feedback', cell: (element: any) => `${element.feedbackNote}`  },

    
    
    // { columnDef: 'fee',   header: 'Project Name', cell: (element: any) => `${element.projectName}`  },
  ];


}
