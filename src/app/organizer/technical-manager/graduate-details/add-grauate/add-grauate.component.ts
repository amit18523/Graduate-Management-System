import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { GraduateDetailsService } from '../graduate-details.service';
import { batchesGet } from 'src/backend.Data';
import { GlobalService } from 'src/app/global.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-grauate',
  templateUrl: './add-grauate.component.html',
  styleUrls: ['./add-grauate.component.scss']
})
export class AddGrauateComponent {

  graduateForm: FormGroup;

  constructor(private fb: FormBuilder, private graduateDetailsService: GraduateDetailsService,private globalService:GlobalService,private _snackBar: MatSnackBar){ }

  batchNameList = [];
  getBatchName : batchesGet[];
  submitted : boolean =false;
  date : any;

  ngOnInit(){
    this.graduateForm = this.fb.group({
      batchName:['',[Validators.required]],
      employeeName:['',[Validators.required]],
      designation:['',[Validators.required]],
      dateOfJoining:Date,
      mobileNumber:['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      dateOfBirth:Date,
      gender:['',[Validators.required]],
      deliveryDirector:['',[Validators.required]]
    });
    this.globalService.getAllBatches().subscribe(data=> {
      this.getBatchName = data;
    })
    this.date = new Date().toISOString().slice(0, 10);
    console.log("dateeeeeeee",this.date);
  }

  get batchName(){
    return this.graduateForm.get('batchName');
  }
  get employeeName(){
    return this.graduateForm.get('employeeName');
  }
  get designation(){
    return this.graduateForm.get('designation');
  }
  get mobileNumber(){
    return this.graduateForm.get('mobileNumber');
  }
  get email(){
    return this.graduateForm.get('email');
  }
  get gender(){
    return this.graduateForm.get('gender');
  }
  get deliveryDirector(){
    return this.graduateForm.get('deliveryDirector');
  }

  onSubmit(){
  
    this.graduateDetailsService.postGrad(this.graduateForm.value)
    .subscribe(
      response => {
        console.log("heyy")
        console.log("resp" + response);
        if(response.includes("exists")){
          this._snackBar.open(response, '', {
            duration: 3000
          });
          
        }
        else{        
          this._snackBar.open(response, '', {
            duration: 3000
          });
          this.graduateForm.reset();
        }

      },
      error => console.log(error)
      
    );
  }

}


