import { Component, ChangeDetectorRef, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ForbiddenNameValidator } from '../shared/user-name.validator';
import { PasswordValidator } from '../shared/password.validator';
import { AbstractControlOptions } from '@angular/forms';
// import { UserService } from './user.service';
import { GlobalService } from 'src/app/global.service';
import { buddyData, employeeData } from 'src/app/employeeData';
import { BuddyService } from '../buddy.service';
import {MatSnackBar} from '@angular/material/snack-bar';

import { batchesGet } from 'src/backend.Data';
@Component({
  selector: 'app-add-buddy',
  templateUrl: './add-buddy.component.html',
  styleUrls: ['./add-buddy.component.scss']
})
export class AddBuddyComponent implements OnInit {

  buddyForm: FormGroup;


  constructor(private fb: FormBuilder,private buddyService:BuddyService,private globalService:GlobalService,private _snackBar: MatSnackBar) { }
  

  getEmpId: employeeData[];
  getBuddyEmpId: employeeData[];
  batches: batchesGet[];
  getUpdatedGrads: employeeData[];
  getUpdatadBuddy: employeeData[];

  ngOnInit() {
    this.buddyForm = this.fb.group({
      gradId: [{ value: '', disabled: true }, [Validators.required]],
      buddyId: [{ value: '', disabled: true }, [Validators.required]]
    })
    this.globalService.getAllEmployees().subscribe(data => {
      this.getEmpId = data;
    })
    this.globalService.getAllEmployees().subscribe(data => {
      this.getBuddyEmpId = data;
    })
    this.globalService.getAllBatches().subscribe(data => {
      this.batches = data;
    })
  }
  get gradId() {
    return this.buddyForm.get('gradId');
  }

  get buddyId() {
    return this.buddyForm.get('buddyId');
  }

  onSubmit(){
    console.log(this.buddyForm.value);
    this.buddyService.postBuddy(this.buddyForm.value)
    .subscribe(
      response => {
        console.log("heyy")
        console.log("resp" + response);
        this._snackBar.open("Buddy Created", '', {
          duration: 9000,
        });
        this.buddyForm.reset();

      },
      error => console.log(error)
    )
  }
 
  onChangeValue(value: any) {
    this.getUpdatedGrads = [];
    if(value != 'Select Grad Batch'){
      this.buddyForm.get('gradId')?.enable();
    }
    for (let i of this.getEmpId) {
      if (i.batchName == value) {
        this.getUpdatedGrads.push(i);
      }
    }
  }
  onChange(value: any) {
    // console.log(value);
    this.getUpdatadBuddy = [];
    if(value != 'Select Buddy Batch'){
      this.buddyForm.get('buddyId')?.enable();
    }
    for (let i of this.getBuddyEmpId) {
      if (i.batchName == value) {
        this.getUpdatadBuddy.push(i);
      }
    }
  }


}



