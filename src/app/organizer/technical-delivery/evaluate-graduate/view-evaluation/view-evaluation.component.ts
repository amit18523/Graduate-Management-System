import { Component } from '@angular/core';
import { EvaluateGradService } from '../evaluate-grad.service';
@Component({
  selector: 'app-view-evaluation',
  templateUrl: './view-evaluation.component.html',
  styleUrls: ['./view-evaluation.component.scss']
})
export class ViewEvaluationComponent {

  
  constructor(private evaluateGradService : EvaluateGradService) {}
  
  dataSource:any;

  ngOnInit(): void {
    this.evaluateGradService.getEvaluateGrad()
    .subscribe(data => {
      this.dataSource = data;
    });
    // this.feedback.getFeedback()
    // .subscribe(data => {
    //   this.dataSource = data;
    // })
  }
  // selectedBatch : [''],
  // graduateSelected : [''],
  // topicSelected: [''],
  // evaluationDate: Date,
  // scoreGiven:[''],
  // feedback:['']
  columns = [
    //{ columnDef: 'id', header: 'Project Calender Id',    cell: (element: any) => `${element.projectCalendarId}` },
    //{ columnDef: 'batchId',   header: 'Batch Id', cell: (element: any) => `${element.batchId}`  },
    { columnDef: 'batchName',   header: 'Batch Name', cell: (element: any) => `${element.batchName}`  },
    { columnDef: 'empId',   header: 'Employee ID', cell: (element: any) => `${element.empId}`  },
    { columnDef: 'topicName',   header: 'Topic Name', cell: (element: any) => `${element.topicName}`  },
    { columnDef: 'empName',   header: 'Employee Name', cell: (element: any) => `${element.empName}`  },
    { columnDef: 'date',     header: 'Scheduled Date',   cell: (element: any) => `${element.date}`.split("T", 1)},
    { columnDef: 'score',   header: 'Score', cell: (element: any) => `${element.score}` },     
    { columnDef: 'feedback',   header: 'Feedback', cell: (element: any) => `${element.feedback}`  },
   
    
   
   
 
  ];

}
