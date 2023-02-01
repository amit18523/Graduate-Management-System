import { Component } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { AbstractControlOptions } from '@angular/forms';
import { TrainerAssignService } from '../trainer-assign.service';
import { batchesGet } from '../../add-project/batchData';
import {MatSnackBar} from '@angular/material/snack-bar';


import { topicNameGet } from '../../trannier-assignr/topicName';
import { GlobalService } from 'src/app/global.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  trannierAssignment: FormGroup;

  constructor(private fb: FormBuilder,private trainerAssignService: TrainerAssignService, private globalService : GlobalService, private _snackBar: MatSnackBar) { }
  // batchIdList = [];
  batchNameList = [];
  topicNameList:[];
  // getBatcheId : batchesGet[];
  getBatchName : batchesGet[];
  getTopicName : topicNameGet[];
  submitted : boolean = false;
  //trainerNameList:[]
  ngOnInit() {
    this.trannierAssignment = this.fb.group({
          batchName:['',[Validators.required]],
          topicName:['',[Validators.required]],
          trainerName1:['',[Validators.required]],
          trainerName2:['',[Validators.required]],
          training_date: Date,
          training_session:['',[Validators.required]],
          trainingObjective:['',[Validators.required]]
          
      })
      console.log("hello")
      this.globalService.getAllBatches().subscribe(data => {
        this.getBatchName = data;
        console.log(this.getBatchName);
      })
      this.globalService.getTopic().subscribe(data => {
        this.getTopicName = data;
        
      })
  }
  get batchName(){
    return this.trannierAssignment.get('batchName');
  }
  get topicName(){
    return this.trannierAssignment.get('topicName');
  }
  get trainerName1(){
    return this.trannierAssignment.get('trainerName1');
  }
  get trainerName2(){
    return this.trannierAssignment.get('trainerName2');
  }
  get training_session(){
    return this.trannierAssignment.get('training_session');
  }
  get trainingObjective(){
    return this.trannierAssignment.get('trainingObjective');
  }




  onSubmit(){
    console.log(this.trannierAssignment.value);
    this.trainerAssignService.postTrainerAssign(this.trannierAssignment.value)
    .subscribe(
      response => {
        console.log("heyy")
        console.log("resp" + response);
        this._snackBar.open("Trainer Assigned", '', {
          duration: 3000,
        });        
        this.trannierAssignment.reset();


      },
      error => console.log(error)
    );

  }
}


// @Column(name="batch_id")
// private int batchId;

// //FK
// @Column(name="topic_id")
// private int topicId;

// @Column(name="topic_name")
// private String topicName;


// @Column(name="trainer_name1")
// private String trainerName1;

// @Column(name="trainer_name2")
// private String trainerName2;

// @Column(name="training_date")
// private Date training_date;

// @Column(name="training_session")
// private String training_session;

// @Column(name="training_objective")
// private String trainingObjective;
