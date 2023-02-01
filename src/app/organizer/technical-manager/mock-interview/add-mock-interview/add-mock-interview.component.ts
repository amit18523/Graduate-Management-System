import { Component, ChangeDetectorRef, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
// import { Timestamp } from 'rxjs-compat';
import { InterviewService } from '../interview.service';
import { batchesGet } from 'src/backend.Data';
import { GlobalService } from 'src/app/global.service';
import { employeeData } from 'src/app/employeeData';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-mock-interview',
  templateUrl: './add-mock-interview.component.html',
  styleUrls: ['./add-mock-interview.component.scss']
})
export class AddMockInterviewComponent {

  mockInterview : FormGroup;
  constructor(private fb: FormBuilder ,private interviewService : InterviewService,private globalService:GlobalService,private _snackBar: MatSnackBar) { }
  empIdList = [];
//  batchNameList = [];


 // getBatchName : batchesGet[];
  getEmpId : employeeData[]; 
  submitted : boolean = false;
  ngOnInit() {
    this.mockInterview = this.fb.group({
       empId : ['',[Validators.required]], 
       interviewerName : ['',[Validators.required]],
       interviewDate : Date,
       time : Date,
      })
    // this.globalService.getAllBatches().subscribe(data => {
    //   this.getBatchName = data;
    //   console.log(this.getBatchName);
    // })
    this.globalService.getAllEmployees().subscribe(data => {
      this.getEmpId = data;
    })
  }
 
  get empId(){
    return this.mockInterview.get('empId');
  }
  get interviewerName(){
    return this.mockInterview.get('interviewerName');
  }
  get interviewDate(){
    return this.mockInterview.get('interviewDate');
  }
  onSubmit(){
    // console.log(this.mockInterview.value);
    this.interviewService.postMockInterview(this.mockInterview.value)
    .subscribe(
      response => {
        console.log('Success!', response);
        this._snackBar.open("Mock Interview Scheduled !", '', {
          duration: 3000,
        });        
        this.mockInterview.reset();
      },
      error => console.error('Error!', error)
    );
  }


  }


