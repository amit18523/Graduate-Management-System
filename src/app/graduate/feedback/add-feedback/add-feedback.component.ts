import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FeedbackService } from '../feedback.service';
import { GlobalService } from 'src/app/global.service';
import { Task } from '../shared/models/task.model';
import { LoginService } from 'src/app/login/login.service';
import { userLoginData } from 'src/app/login/login/loginData';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.scss']
})
export class AddFeedbackComponent {
  userData : userLoginData;
  public graduateFeedBack = new FormGroup({
   // sessionName : new FormControl(''),
    feedbackNote : new FormControl(''),
    idfrom : new FormControl(''),
    batchId : new FormControl(''),
    empId : new FormControl('')
  });
  constructor(private feedback : FeedbackService, private global : GlobalService, private login : LoginService){ 
  }
  ngOnInit(){
    this.login.transferData.subscribe(data =>{
      this.userData = data;
    })
  }
  // batchIdList = [];
  createTask(){
    // console.log('i have been clicked');
  }
  name : string ;
  note : string ;
  id : number = 1;

  public createFeedback(): void {
    this.graduateFeedBack.value.batchId = this.userData.batchId;
    this.graduateFeedBack.value.empId = this.userData.empId;
    this.feedback.register(this.graduateFeedBack.value)
    .subscribe();
    //   response => {
    //     console.log('Success!', response);
    //     // this._snackBar.open("Feedback Added !", '', {
    //     //   duration: 3000,
    //     // });
    //     // this.graduateFeedBack.reset();
    //   // },
    //   // error => console.error('Error!', error)
    // );
  }
  
}
