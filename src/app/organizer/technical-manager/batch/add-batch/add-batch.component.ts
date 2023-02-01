import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { batchesGet } from '../../add-project/batchData';
import { BatchService } from '../batch.service';
import {MatSnackBar} from '@angular/material/snack-bar';

import { ViewEncapsulation } from '@angular/core'; 

@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrls: ['./add-batch.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddBatchComponent {

  batchForm :FormGroup;
  showStausDiv : boolean = false;

  constructor(private fb:FormBuilder,private globalService:GlobalService,private batchService:BatchService,private _snackBar: MatSnackBar) {}

  submitted : boolean = false;
  errMsg : string = "";
  successMsg : string = "";

  ngOnInit(){
    this.batchForm = this.fb.group({
      batchName : ['']
    })
  }
 
  onSubmit(){
    console.log(this.batchForm.value);
    // this.batchService.checkIfBatchExists(this.batchForm.value.batchName).subscribe(
    //   response => {
    //     console.log(response);
    //     if(response){
    //       this._snackBar.open('This Batch has already been created !', '', {
    //         duration: 9000,
    //         // verticalPosition: 'top',
    //         // horizontalPosition: 'start',
    //         panelClass: 'my-custom-snackbar'
    //       });
    //     }
    //     else{
    //       this.batchService.postBatch(this.batchForm.value).subscribe();
        
    //       this._snackBar.open("Batch Created !");
    //       this.batchForm.reset();
    //     }

    //   },
    //   error => console.log(error)
    // )

    this.batchService.postBatch(this.batchForm.value).subscribe(
      response => {
        console.log("heyy")
        console.log("resp" + response);
        if(response.includes("exists")){
          this._snackBar.open(response, '', {
            duration: 3000,
            panelClass: 'aa'
          });
        }
        else{        
          this._snackBar.open(response, '', {
            duration: 3000,
            panelClass: 'my-custom-snackbar'
          });
          this.batchForm.reset();
        }

      },
      error => console.log(error)
    );
    // if(this.batchService.checkIfBatchExists(this.batchForm.value)){
    //   this.errMsg = "This Batch has already been created";
    //   this._snackBar.open("This Batch has already been created !");
    // } else{
    // this.batchService.postBatch(this.batchForm.value).subscribe();
    // this.batchForm.reset();
    // this.successMsg = "Batch Created !"
    // this._snackBar.open("Batch Created !");
    // }
    
  }


}
