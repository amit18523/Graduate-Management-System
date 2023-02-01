import { Component } from '@angular/core';
import { ProjectAssignmentService } from '../project-assignment.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  constructor(private projectAssignmentService:ProjectAssignmentService){}

  dataSource:any;

  ngOnInit(): void {
    this.projectAssignmentService.getProjectAssignment()
    .subscribe(data => {
      this.dataSource = data;
    });
  }
  // selectBatchId: [''],
  //     teamNumber:[''],
  //     empId : [''],
  //     projectLead1:[''],
  //     projectLead2:[''],
  //     projectName:['']
  columns = [
    { columnDef: 'batchName', header: 'Batch Name',    cell: (element: any) => `${element.batchName}` },
    { columnDef: 'id', header: 'Team Number',    cell: (element: any) => `${element.teamNumber}` },
    { columnDef: 'empId',  header: 'Team Members',   cell: (element: any) => `${element.allotedEmp}`},
    { columnDef: 'projectLead1',   header: 'Project Lead 1', cell: (element: any) => `${element.projectLead1}`   },
    { columnDef: 'projectLead2',   header: 'Project Lead 2', cell: (element: any) => `${element.projectLead2}`   },
    { columnDef: 'projectName',   header: 'Project Name', cell: (element: any) => `${element.projectName}`   }
   ];


}
