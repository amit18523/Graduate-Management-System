import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/models/task.model';
import { FeedbackService } from '../feedback.service';
import { GlobalService } from 'src/app/global.service';
import { LoginService } from 'src/app/login/login.service';
import { userLoginData } from 'src/app/login/login/loginData';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.scss']
})
export class ViewFeedbackComponent {
  //tasks: Task[] = [];

  constructor(private feedback: FeedbackService, private global : GlobalService, private login: LoginService) {}

  dataSource:any;
  userEmpdata : userLoginData;
  ngOnInit(): void {
 

    this.login.transferData.subscribe(data =>{
      this.userEmpdata = data;
     // console.log("hi" + this.userEmpdata);
      if(this.userEmpdata.empId == null || this.userEmpdata.empId == undefined){
        this.userEmpdata.empId = localStorage.getItem('empId');
      }
      this.feedback.getUser(this.userEmpdata.empId).subscribe(data =>{
        this.dataSource = data;
       // console.log(this.dataSource);
      })
    })
    
  }
  displayedColumns: string[] = ['feedbackId', 'feedbackNote'];

}
