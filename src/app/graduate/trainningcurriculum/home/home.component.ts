import { Component } from '@angular/core';
import { TranningCurService } from '../tranning-cur.service';
import { LoginService } from 'src/app/login/login.service';
import { userLoginData } from 'src/app/login/login/loginData';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  dataSource : any;
  batchId : any;

  constructor(private tranningService : TranningCurService, private login : LoginService){}
 
    userEmpdata : userLoginData;
    ngOnInit(): void {
   
  
      this.login.transferData.subscribe(data =>{
        this.userEmpdata = data;
        // console.log(this.userEmpdata);
        if(this.userEmpdata.batchId == null || this.userEmpdata.batchId == undefined){
          this.userEmpdata.batchId = localStorage.getItem('batchID');
          // console.log(this.userEmpdata.batchId);
        }
      
        this.tranningService.gettranningCirriculum(this.userEmpdata.batchId).subscribe(data =>{
          this.dataSource = data;
          // console.log(this.dataSource);
        })
      })
      

    }
     displayedColumns: string[] = ['Serial No.','Topic Name'];
  }
 

