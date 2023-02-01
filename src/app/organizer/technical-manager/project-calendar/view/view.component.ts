import { Component } from '@angular/core';
import { CalendarService } from '../calendar.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {
  constructor(private calenderSerivice : CalendarService) {}

  dataSource:any;

  ngOnInit(): void {
    this.calenderSerivice.getCalender()
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
    { columnDef: 'teamNumber',   header: 'Team Number', cell: (element: any) => `${element.teamNumber}`  },
    { columnDef: 'projectName',   header: 'Project Name', cell: (element: any) => `${element.projectName}`  },
    { columnDef: 'date',     header: 'Scheduled Date',   cell: (element: any) => `${element.date}`.split("T", 1)},
    { columnDef: 'description',   header: 'Evaluation description', cell: (element: any) => `${element.description}` }, 
    
    { columnDef: 'projectProgress',   header: 'Project Progress', cell: (element: any) => `${element.projectProgress}`  },
   
    
   
   
 
  ];
}
