import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ScheduleInterviewService } from '../schedule-interview.service';

@Component({
  selector: 'app-view-interview',
  templateUrl: './view-interview.component.html',
  styleUrls: ['./view-interview.component.scss']
})

export class ViewInterviewComponent {

  constructor(private scheduleInterviewService : ScheduleInterviewService) {}
  columns = [
    { columnDef: 'batchId',   header: 'Batch Id', cell: (element: any) => `${element.batchId}`  },
    { columnDef: 'batchName',   header: 'Batch Name', cell: (element: any) => `${element.batchName}`  },
    { columnDef: 'empId',   header: 'Employee ID', cell: (element: any) => `${element.empId}`  },
    { columnDef: 'gradName',   header: 'Graduate Name', cell: (element: any) => `${element.gradName}`  },
    { columnDef: 'jobId',   header: 'JobId', cell: (element: any) => `${element.jobId}`  },
    { columnDef: 'interviewDate',     header: 'Interview Date',   cell: (element: any) => `${element.interviewDate}`.split("T", 1)},
    { columnDef: 'time',   header: 'Interview Time', cell: (element: any) => `${element.time}` }
  ];
  displayedColumns: any;
  dataSource:any;
  checkboxColor:any = "primary";

  ngOnInit(): void {
    this.scheduleInterviewService.getInterview()
    .subscribe(data => {
      this.dataSource = data;
    });
    this.displayedColumns = this.columns.map((c: { columnDef: any; }) => c.columnDef);
    this.displayedColumns.push('select')
    // this.feedback.getFeedback()
    // .subscribe(data => {
    //   this.dataSource = data;
    // })
  }

  selection = new SelectionModel<any>(true, []);

  // GradIsSelected(row:any):any{
  //   console.log(row.empId);
  //   // console.log(this.scheduleInterviewService.checkIfGradIsSelected(row.empId,row.jobId));
  //   return this.scheduleInterviewService.updateGradSelected({empId:row.empId,jobId:row.jobId}).subscribe();
  // }

  onGradSelection(row:any){
    // row.selected=!row.selected;
    console.log(row);
    if(row.selected){
      console.log("delete triggered");
      this.scheduleInterviewService.deleteSelectedGrad({empId:row.empId,jobId:row.jobId}).subscribe(
        data => {
          console.log("Delete grad success! ", data);
          this.ngOnInit();
        },
        err => {
          console.log("Deleted grad failed! ", err);
        });
    } else {
      console.log("add triggered");
      this.scheduleInterviewService.addSelectedGrad({batchId:row.batchId,empId:row.empId,jobId:row.jobId,batchName:row.batchName}).subscribe(
        data => {
          console.log("Grad Selected updated! ", data);
          this.ngOnInit();
        },
        err => {
          console.log("Grad Selected not updated! ", err);
        });
    }
   
    this.selection.toggle(row);

      this.scheduleInterviewService.updateGradSelected({empId:row.empId,jobId:row.jobId}).subscribe();
  }
  

}
