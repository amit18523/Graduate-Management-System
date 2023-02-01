import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BlockedService } from '../blocked.service';



@Component({
  selector: 'app-viewblocked',
  templateUrl: './viewblocked.component.html',
  styleUrls: ['./viewblocked.component.scss']
})
export class ViewblockedComponent {

  constructor(private blockedService : BlockedService) {}
  columns = [
    { columnDef: 'batchId',   header: 'Batch Id', cell: (element: any) => `${element.batchId}`  },
    { columnDef: 'batchName',   header: 'Batch Name', cell: (element: any) => `${element.batchName}`  },
    { columnDef: 'empId',   header: 'Employee ID', cell: (element: any) => `${element.empId}`  },
    { columnDef: 'empName',   header: 'Employee Name', cell: (element: any) => `${element.empName}`  },
    { columnDef: 'jobId',   header: 'Job ID', cell: (element: any) => `${element.jobId}`  },
    { columnDef: 'client',     header: 'Client',   cell: (element: any) => `${element.client}`},
  ];
  displayedColumns: any;
  dataSource:any;
  checkboxColor:any = "primary";

  ngOnInit(): void {
    this.blockedService.getBlocked()
    .subscribe(data => {
      this.dataSource = data;
    });
    this.displayedColumns = this.columns.map((c: { columnDef: any; }) => c.columnDef);
    this.displayedColumns.push('select')
  }

  // displayedColumns: string[] = ['batchId','batchName','empId','empName','jobId','client','interviewScheduled','selected'];

  selection = new SelectionModel<any>(true, []);

 
  onInterviewSchedule(row:any){
    this.selection.toggle(row);
    this.blockedService.updateBlockedscheduleInterview({empId:row.empId,jobId:row.jobId}).subscribe(
      data => {
        // console.log("Interview Scheduled! ", data);
      },
      err => {
        // console.log("Interview not Scheduled! ", err);

      });
  }

}
