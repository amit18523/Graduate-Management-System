import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { userLoginData } from './loginData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  userData : userLoginData;
  myForm : FormGroup;
  path = 'home';

  setLocalStoreageFalse(){
    localStorage.setItem('technicalManager', 'false');
    localStorage.setItem('technicalDelivery', 'false');
    localStorage.setItem('approvalLead', 'false');
    localStorage.setItem('graduateManager', 'false');
    localStorage.setItem('others', 'false');
    localStorage.setItem('graduate', 'false');
  }

  constructor(private router: Router, private fb : FormBuilder, private loginService : LoginService) {}
  ngOnInit() {
    this.myForm = this.fb.group({
      
       userName :['',[Validators.required]],
       password :['' , [Validators.required]]
    })
    this.setLocalStoreageFalse();
  }

  onLogin() {
    this.loginService.getUser(this.myForm.value.userName).subscribe( data=>{
      this.userData = data;
    });
    if(this.userData == null){
      this.router.navigate(['/login']);
    }
    setTimeout(() => {

      if(this.userData.password ==  this.myForm.value.password){
        // console.log(" iam inside password");
        setTimeout(() => {
          this.path = this.userData.role;
          this.path = '/'+this.userData.role;
          this.router.navigate([this.path]);
          localStorage.setItem(this.userData.role, 'true');
          localStorage.setItem('batchID', this.userData.batchId);
          localStorage.setItem('empId', this.userData.empId);
          // console.log(this.userData);
          this.loginService.sendData(this.userData);
        }, 500);
      }
      
    }, 500);
  }
}
