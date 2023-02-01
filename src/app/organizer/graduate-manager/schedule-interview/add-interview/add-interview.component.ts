import { Component } from '@angular/core';
import {  FormBuilder,FormControl, FormArray, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { batchesGet } from 'src/backend.Data';
import { GlobalService } from 'src/app/global.service';
import { employeeData } from 'src/app/employeeData';
import { ScheduleInterviewService } from '../schedule-interview.service';
import { jobData } from 'src/app/jobData';
import { elegibity } from '../elegibity';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-interview',
  templateUrl: './add-interview.component.html',
  styleUrls: ['./add-interview.component.scss']
})
export class AddInterviewComponent {

  scheduleInterview : FormGroup;
  constructor(private fb: FormBuilder ,private scheduleInterviewService : ScheduleInterviewService ,private globalService:GlobalService,private _snackBar: MatSnackBar) { }
 
  batchNameList = [];
  empIdList = [];
  jobIdList = [];
  jobIdSelected : number = -1;


  getEmployeeId : employeeData[];
  getBatchName : batchesGet[];
  getJobId : jobData[];
  submitted : boolean = false;
  dataHere = new elegibity();
  elegibleList : employeeData[];


  ngOnInit() {
    this.scheduleInterview = this.fb.group({
      batchName : ['',[Validators.required]],
      empId : [{value: '', disabled: true},[Validators.required]],
      jobId : ['',[Validators.required]],
      interviewDate : Date,
      time : ['',[Validators.required]],
      
    })
    this.globalService.getAllEmployees().subscribe(data => {
      this.getEmployeeId = data;
    });
    this.globalService.getAllBatches().subscribe(data => {
      this.getBatchName = data;
    });
    this.globalService.getJob().subscribe(data => {
      this.getJobId = data;
    })
  }

  getJobIdSlected(jobId : any){
          

        this.jobIdSelected = jobId;
       
        this.dataHere.jobId =  this.jobIdSelected;
        this.scheduleInterviewService.getInterviewScheduledGrads(this.dataHere).subscribe(data=>{
          this.elegibleList = data;
          if(jobId != ''){
            this.scheduleInterview.get('empId')?.enable();
          }
         
        });
      
}

  get batchName() {
    return this.scheduleInterview.get('batchName');

  }
  get jobId() {
    return this.scheduleInterview.get('jobId');

  }
  get empId() {
    return this.scheduleInterview.get('empId');

  }
  get interviewDate() {
    return this.scheduleInterview.get('interviewDate');

  }
  get time() {
    return this.scheduleInterview.get('time');

  }
 
 onSubmit(){
    console.log(this.scheduleInterview.value);
    this.scheduleInterviewService.postInterview(this.scheduleInterview.value)
    .subscribe(
      response => {
        console.log('Success!', response);
        this._snackBar.open("Interview Scheduled !", '', {
          duration: 3000,
        });        
        this.scheduleInterview.reset();
      },
      error => console.error('Error!', error)
    );

  }
}
