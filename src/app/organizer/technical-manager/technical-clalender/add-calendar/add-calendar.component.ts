import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { TechnicalcalendarService } from '../technicalcalendar.service';
import { GlobalService } from 'src/app/global.service';
import { batchesGet } from 'src/backend.Data';
import { topicNameGet } from '../../trannier-assignr/topicName';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-calendar',
  templateUrl: './add-calendar.component.html',
  styleUrls: ['./add-calendar.component.scss']
})
export class AddCalendarComponent {

  TechnicalCalendarForm: FormGroup;

  constructor(private fb :FormBuilder,private technicalCalendarService:TechnicalcalendarService,private globalService:GlobalService,private _snackBar: MatSnackBar) {}

 // batchIdList = [];
  //topicIdList = [];

  getBatchName : batchesGet[];
  getTopicName : topicNameGet[];
  submitted : boolean = false;
  
 

  ngOnInit(){
    this.TechnicalCalendarForm = this.fb.group({
      batchName:['',[Validators.required]],
      trainingTopicName:['',[Validators.required]],
      trainingCalendarDate:Date,
      trainingSession:['',[Validators.required]]

    })
    this.globalService.getAllBatches().subscribe(data => {
      this.getBatchName = data;
    })
    this.globalService.getTopic().subscribe(data => {
      this.getTopicName = data;
    })
  }
  get batchName() {
    return this.TechnicalCalendarForm.get('batchName');
  }

  get trainingTopicName() {
    return this.TechnicalCalendarForm.get('trainingTopicName');
  }
  get trainingSession() {
    return this.TechnicalCalendarForm.get('trainingSession');
  }

  onSubmit(){
    console.log(this.TechnicalCalendarForm.value);
    this.technicalCalendarService.postCalendar(this.TechnicalCalendarForm.value)
    .subscribe(
      response => {
        console.log("heyy")
        console.log("resp" + response);
        this._snackBar.open("Session added in Technical Calendar", '', {
          duration: 3000,
        });        
        this._snackBar.open("Session added in Technical Calendar", '', {
          duration: 3000,
        });
        this.TechnicalCalendarForm.reset();


      },
      error => console.log(error)
    );
  }
}
//     //FK
//     @Column(name="batch_id")
//     private int batchId;

//     //FK
//     @Column(name="topic_id")
//     private int topicId;

//     @Column(name="trainingTopic_name")
//     private String trainingTopicName;

//     @Column(name="trainingCalendar_date")
//     private Date trainingCalendarDate;

//     @Column(name="training_session")
//     private String trainingSession;

//     @Column(name="trainingCalendar_approve")
//     private boolean trainingCalendarApprove;

