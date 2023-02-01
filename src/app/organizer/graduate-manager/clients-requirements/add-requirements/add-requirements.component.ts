import { Component, ChangeDetectorRef, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ClientrequirementsService } from '../clientrequirements.service';
import { GlobalService } from 'src/app/global.service';
import { batchesGet } from 'src/backend.Data';
import { jobData } from 'src/app/jobData';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-requirements',
  templateUrl: './add-requirements.component.html',
  styleUrls: ['./add-requirements.component.scss']
})
export class AddRequirementsComponent {

  clientRequirements : FormGroup;
  constructor(private fb: FormBuilder ,private clientRequirementService : ClientrequirementsService ,private globalService:GlobalService, private _snackBar: MatSnackBar) { }
  jobIdList = [];
  batchNameList = [];
  getBatchName : batchesGet[];
  getJob : jobData[];
  submitted : boolean = false;

  ngOnInit() {
    this.clientRequirements = this.fb.group({
       batchName : ['',[Validators.required]],
       jobId : ['',[Validators.required]],
       noOfPositions : ['',[Validators.required]],
       stakeholder : ['',[Validators.required]],
       department : ['',[Validators.required]],
       location : ['',[Validators.required]],
       gender : ['',[Validators.required]]
      
       
    })
  
    this.globalService.getAllBatches().subscribe(data => {
      this.getBatchName = data;
    });
    this.globalService.getJob().subscribe(data => {
      this.getJob = data;
    })
  }
  get batchName() {
    return this.clientRequirements.get('batchName');

  }
  get jobId() {
    return this.clientRequirements.get('jobId');

  }
  get noOfPositions() {
    return this.clientRequirements.get('noOfPositions');

  }
  get stakeholder() {
    return this.clientRequirements.get('stakeholder');

  }
  get department() {
    return this.clientRequirements.get('department');

  }
  get location() {
    return this.clientRequirements.get('location');

  }
  get gender() {
    return this.clientRequirements.get('gender');

  }
  onSubmit(){
    // console.log(this.clientRequirements.value);
    this.clientRequirementService.postClientRequirements(this.clientRequirements.value)
    .subscribe(
      response => {
        console.log('Success!', response);
        this._snackBar.open("Requirement Added !", '', {
          duration: 3000,
        });        
        this.clientRequirements.reset();
      },
      error => console.error('Error!', error)
    );
  }

}
