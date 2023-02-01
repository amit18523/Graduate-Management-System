import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CalendarService } from '../calendar.service';
import { batchesGet } from 'src/backend.Data';
import { GlobalService } from 'src/app/global.service';
import { projectNameGet } from 'src/app/projectName';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

  projectCalendar : FormGroup;
  constructor(private fb: FormBuilder , private calenderService : CalendarService,private globalService:GlobalService, private _snackBar: MatSnackBar) { }
  //batchIdList = [];

  getBatchName : batchesGet[];
  getProjectName : projectNameGet[];

  submitted : boolean =false;
  ngOnInit() {
    this.projectCalendar = this.fb.group({
       batchName :['',[Validators.required]],
       teamNumber : ['',[Validators.required]],
       projectName : ['',[Validators.required]],
       date : Date,
       projectProgress : ['',[Validators.required]],
       description : ['',[Validators.required]],
      //  selectBatchId : ['']
    })
    this.globalService.getAllBatches().subscribe(data => {
      this.getBatchName = data;
    })
    this.globalService.getProjectTopics().subscribe(data => {
      this.getProjectName = data;
    })
  }
  get batchName(){
    return this.projectCalendar.get('batchName');
  }
  get teamNumber(){
    return this.projectCalendar.get('teamNumber');
  }
  get projectName(){
    return this.projectCalendar.get('projectName');
  }
  get projectProgress(){
    return this.projectCalendar.get('projectProgress');
  }
  get description(){
    return this.projectCalendar.get('description');
  }
  
  
  onSubmit(){
    console.log(this.projectCalendar.value);
   
    this.calenderService.postCalender(this.projectCalendar.value)
    .subscribe(
      response => {
        console.log(response);
        this._snackBar.open("Project details added in Project Calendar", '', {
          duration: 3000,
        });      
        this.projectCalendar.reset();
      },
      error => console.log(error)
    );
  }

}
