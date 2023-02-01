import { Component } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { AbstractControlOptions } from '@angular/forms';
import { EvaluateGradService } from '../evaluate-grad.service';
import { batchesGet } from 'src/backend.Data';
import { GlobalService } from 'src/app/global.service';
import { employeeData } from 'src/app/employeeData';
//import { ScheduleInterviewService } from '../schedule-interview.service';
import { jobData } from 'src/app/jobData';
import { topicNameGet } from 'src/app/organizer/technical-manager/trannier-assignr/topicName';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-evaluation',
  templateUrl: './add-evaluation.component.html',
  styleUrls: ['./add-evaluation.component.scss']
})
export class AddEvaluationComponent {

  evaluationDesgin : FormGroup;
  constructor(private fb: FormBuilder,private evaluationService : EvaluateGradService ,private globalService:GlobalService,private _snackBar: MatSnackBar) { }
  batchNameList:[]
  empIdlist:[]
  topics:[]

  
  getEmpId : employeeData[];
  getBatchName : batchesGet[];
  getTopicName : topicNameGet[];
  submitted : boolean = false;
  ngOnInit() {
    
    this.evaluationDesgin = this.fb.group({
          batchName : ['',[Validators.required]],
          empId : ['',[Validators.required]],
          topicName: ['',[Validators.required]],
          date: Date,
          score:['',[Validators.required]],
          feedback:['',[Validators.required]]
      })
      this.globalService.getAllEmployees().subscribe(data => {
        this.getEmpId = data;
      });
      this.globalService.getAllBatches().subscribe(data => {
        this.getBatchName = data;
      });
      this.globalService.getTopic().subscribe(data => {
        this.getTopicName = data;
      });
  }
  get batchName() {
    return this.evaluationDesgin.get('batchName');

  }
  get empId() {
    return this.evaluationDesgin.get('empId');

  }
  get topicName() {
    return this.evaluationDesgin.get('topicName');

  }
  get date() {
    return this.evaluationDesgin.get('date');

  }
  get score() {
    return this.evaluationDesgin.get('score');

  }
  get feedback() {
    return this.evaluationDesgin.get('feedback');

  }
  onSubmit(){
    console.log(this.evaluationDesgin.value);
    this.evaluationService.postEvaluateGrad(this.evaluationDesgin.value)
    .subscribe(
      response => {
        console.log('Success!', response);
        this._snackBar.open("Grad Evaluated!", '', {
          duration: 3000,
        });
        this.evaluationDesgin.reset();
      },
      error => console.error('Error!', error)
    );
  }
}
