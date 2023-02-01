import { Component } from '@angular/core';
import { TrainerAssignService } from '../trainer-assign.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent {

  constructor(private trainerAssignService : TrainerAssignService){}

  dataSource:any;

  ngOnInit(): void {
    this.trainerAssignService.getTrainerAssign()
    .subscribe(data => {
      this.dataSource = data;
      
    });

    
  }
          // selectBatchId:[''],
          // selectTopicName:[''],
          // trainerName1:[''],
          // trainerName2:[''],
          // trainingDate: Date,
          // trainingSession:[''],
          // tranningObjective:['']

          // {"trainerAssignedId":1,"batchId":6000,"topicId":1,"topicName":"Java",
          // "trainerName1":"Rambabu","trainerName2":"Gautam",
          // "training_date":"2022-11-10T00:00:00.000+00:00
          // "training_session":"morning","trainingObjective":"Java Fundamentals",
          
  columns = [
    { columnDef: 'batchName', header: 'Batch Name',    cell: (element: any) => `${element.batchName}` },
    { columnDef: 'topicName',  header: 'Topic Name',   cell: (element: any) => `${element.topicName}`},
    { columnDef: 'trainerName1',  header: 'Trainer Name 1',   cell: (element: any) => `${element.trainerName1}`},
    { columnDef: 'trainerName2',  header: 'Trainer Name 2',   cell: (element: any) => `${element.trainerName2}`},
    { columnDef: 'trainingDate',   header: 'Training Date', cell: (element: any) => `${element.training_date}`.split("T", 1)   },
    { columnDef: 'tranninngSession',   header: 'Training Session', cell: (element: any) => `${element.training_session}`   },
    { columnDef: 'tranningObjective',   header: 'Training Objective', cell: (element: any) => `${element.trainingObjective}`   }
  ];


}
