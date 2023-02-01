import { Component } from '@angular/core';
import { BuddyService } from '../buddy.service';
@Component({
  selector: 'app-view-buddy',
  templateUrl: './view-buddy.component.html',
  styleUrls: ['./view-buddy.component.scss']
})
export class ViewBuddyComponent {
  constructor(private buddyService : BuddyService) {}

  dataSource:any;
  ngOnInit(): void {
    this.buddyService.getBuddy()
    .subscribe(data => {
      this.dataSource = data;
    });
    // this.feedback.getFeedback()
    // .subscribe(data => {
    //   this.dataSource = data;
    // })
  }
  // {"buddyTableId":2,"batchId":6000,"batchName":"Jan 2022","gradId":8000,"buddyId":8020,"gradName":"Twinkle","buddyName":"Rachna",
  columns = [
    //{ columnDef: 'id', header: 'Project Calender Id',    cell: (element: any) => `${element.projectCalendarId}` },
    { columnDef: 'batchId',   header: 'Batch Id', cell: (element: any) => `${element.batchId}`  },
    { columnDef: 'batchName',   header: 'Batch Name', cell: (element: any) => `${element.batchName}`  },
    { columnDef: 'gradId',   header: 'Graduate ID', cell: (element: any) => `${element.gradId}`  },
    { columnDef: 'buddyId',   header: 'Buddy ID', cell: (element: any) => `${element.buddyId}`  },
    { columnDef: 'gradName',     header: 'Graduate Name',   cell: (element: any) => `${element.gradName}`},
    { columnDef: 'buddyName',     header: 'Buddy Name',   cell: (element: any) => `${element.buddyName}`},
  ];

}
