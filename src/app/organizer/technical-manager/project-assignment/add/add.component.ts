import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectAssignmentService } from '../project-assignment.service';
import { batchesGet } from 'src/backend.Data';
import { GlobalService } from 'src/app/global.service';
import { FormArray } from '@angular/forms';
import { Graduate } from './graduate.data';
import { projectNameGet } from 'src/app/projectName';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  projectAssignmentForm: FormGroup;

  constructor(private fb: FormBuilder, private projectAssignmentService: ProjectAssignmentService, private globalService: GlobalService, private _snackBar: MatSnackBar) { }

  // batchIdList = [];

  getBatchName: batchesGet[];
  getEmpName: Graduate[];
  submitted : boolean = false;
  getProjectName : projectNameGet[];
  ngOnInit() {
    this.projectAssignmentForm = this.fb.group({
      batchName: ['',[Validators.required]],
      teamNumber: ['',[Validators.required]],
      allotedEmp: ['',[Validators.required]],
      projectLead1: ['',[Validators.required]],
      projectLead2: ['',[Validators.required]],
      projectName: ['',[Validators.required]],
      empIds: this.fb.array([])
    })
    this.globalService.getAllBatches().subscribe(data => {
      this.getBatchName = data;
    })
    this.globalService.getAllEmployees().subscribe(data => {
      this.getEmpName = data;
    })
    this.globalService.getProjectTopics().subscribe(data =>{
      this.getProjectName = data;
    })
  }
  get batchName(){
    return this.projectAssignmentForm.get('batchName');
  }
  get teamNumber(){
    return this.projectAssignmentForm.get('teamNumber');
  }
  get allotedEmp(){
    return this.projectAssignmentForm.get('allotedEmp');
  }
  get projectLead1(){
    return this.projectAssignmentForm.get('projectLead1');
  }
  get projectLead2(){
    return this.projectAssignmentForm.get('projectLead2');
  }
  get projectName(){
    return this.projectAssignmentForm.get('projectName');
  }

  get empIds() {
    return this.projectAssignmentForm.get('empIds') as FormArray;
  }

  addEmpIds() {
    this.empIds.push(this.fb.control(''));
  }

  n = 0;
  empVal = "";
  s: any;
  onSubmit() {
    // console.log(this.n = this.projectAssignmentForm.value.empIds.length);
    this.n = this.projectAssignmentForm.value.empIds.length;
    for (let i = 0; i < this.n; i++) {
      this.s = this.projectAssignmentForm.value.empIds[i];
      for (let j = 0; j < this.getEmpName.length; j++) {
        // console.log(this.s +  "" + this.getEmpName[i].empId);
        if (this.s == this.getEmpName[j].empId) {
          this.empVal = this.empVal+ " " +this.getEmpName[j].employeeName;
        }
      }
    }
      this.projectAssignmentForm.value.allotedEmp = this.empVal;
      this.empVal = "";
      // console.log( this.projectAssignmentForm.value.empName)
      // console.log(this.projectAssignmentForm.value);
      this.projectAssignmentService.postProjectAssignment(this.projectAssignmentForm.value)
        .subscribe(
          response => {
            console.log(response);
            this._snackBar.open("Projet Assigned !", '', {
              duration: 3000,
            });          
            this.projectAssignmentForm.reset();
          },
          error => console.log(error)
          

      );
    }
  
}
