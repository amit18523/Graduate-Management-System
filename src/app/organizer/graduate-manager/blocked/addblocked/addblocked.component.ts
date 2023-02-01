import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { BlockedService } from '../blocked.service';
import { batchesGet } from 'src/backend.Data';
import { employeeData } from 'src/app/employeeData';
import { GlobalService } from 'src/app/global.service';
import { jobData } from 'src/app/jobData';
import { elegibity } from '../elegibity';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-addblocked',
  templateUrl: './addblocked.component.html',
  styleUrls: ['./addblocked.component.scss']
})
export class AddblockedComponent {

  blocked: FormGroup;
  constructor(private fb: FormBuilder, private blockedService: BlockedService, private globalService: GlobalService,private _snackBar: MatSnackBar) { }
  empIdList = [];
  batchNameList = [];
  jobIdList = [];
  batchIdSelected: number = -1;
  jobIdSelected: number = -1;

  getBatchName: batchesGet[];
  getEmployeeId: employeeData[];
  getJobId: jobData[];
  submitted: boolean = false;
  dataHere = new elegibity();
  elegibleList: employeeData[];
  isDisabled = true;
  batchGiven = true;
  jobGiven = true;
  ngOnInit() {
    this.blocked = this.fb.group({
      batchName: ['', [Validators.required]],
      empId: [{ value: '', disabled: true }, [Validators.required]],
      jobId: ['', [Validators.required]],
    });
    this.globalService.getAllBatches().subscribe(data => {
      this.getBatchName = data;
    });
    this.globalService.getAllEmployees().subscribe(data => {
      this.getEmployeeId = data;
    });
    this.globalService.getJob().subscribe(data => {
      this.getJobId = data;
    })
  }
  getBatch(batchId: any) {
    if (batchId == '') {
      this.batchIdSelected = -1;
    } else {
      this.batchIdSelected = batchId;
    }
    console.log(batchId);
    if (this.jobIdSelected != -1 && batchId != '') {

      this.dataHere.jobId = this.jobIdSelected;
      this.dataHere.batchId = batchId;
      this.blockedService.checkEligiblity(this.dataHere).subscribe(data => {
        this.elegibleList = data;
        this.blocked.get('empId')?.enable();
      });
    }

  }
  getJobIdSlected(jobId: any) {
    if(jobId == ''){
      this.jobIdSelected = -1;
    } else {
      this.jobIdSelected = jobId;
    }
   
    
    this.dataHere.batchId = this.batchIdSelected;
    if (this.batchIdSelected != -1 && jobId != '') {
      this.dataHere.jobId = this.jobIdSelected;
      this.dataHere.batchId = this.batchIdSelected;
      console.log(this.dataHere);
      this.blockedService.checkEligiblity(this.dataHere).subscribe(data => {
        this.elegibleList = data;
        this.blocked.get('empId')?.enable();
      });
    }
  }
  get batchName() {
    return this.blocked.get('batchName');
  }
  get jobId() {
    return this.blocked.get('jobId');
  }
  get empId() {
    return this.blocked.get('empId');

  }

  onSubmit() {
    for (let i = 0; i < this.getBatchName.length; i++) {
      if (this.blocked.value.batchName == this.getBatchName[i].batchId) {
        this.blocked.value.batchName = this.getBatchName[i].batchName;
        this.blocked.value.batchId = this.getBatchName[i].batchId;
      }
    }
    this.blockedService.postBlocked(this.blocked.value)
      .subscribe(
        response => {
          console.log('Success!', response);
          this._snackBar.open("Grad Blocked !", '', {
            duration: 3000,
          });          
          this.blocked.reset();
        },
        error => console.error('Error!', error)

    );
  }

}