import { Component , OnInit, Input} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { GlobalService } from 'src/app/global.service';
import { Task } from 'src/app/graduate/feedback/shared/models/task.model';
import { batchesGet } from 'src/backend.Data';
import { SharedDashBoardService } from './shared-dash-board.service';
import { req } from './requiremet';
@Component({
  selector: 'app-shared-dash-board',
  templateUrl: './shared-dash-board.component.html',
  styleUrls: ['./shared-dash-board.component.scss']
})
export class SharedDashBoardComponent {

  batches :any;
  storeBatchName : batchesGet[];
  show : boolean = false;
  totalGrads : number = 0;
  selectedGrads : number = 0;
  totalReq : number = 0;
  unplacedGrads : number = 0;
  requirementData : req[];
  countRequirement : number = 0;
  realRequirements : number = 0;
  constructor(private sharedDashSer : SharedDashBoardService,private global : GlobalService){
  }
  tasks : Task[] = [];
  ngOnInit() {
    this.global.getAllBatches().subscribe(data=>{
      this.storeBatchName = data;
    })
   
  }
 

  filterData(num: any, num1 :any){
   // console.log(num);
    // console.log(num1)
    this.sharedDashSer.getcount(num1).subscribe(data=>{
      this.totalGrads = data;
    });
    this.sharedDashSer.getcountselected(num1).subscribe(data=>{
   //   console.log(data);
      this.selectedGrads = data; 
    })
    this.sharedDashSer.getcountRequstion(num1).subscribe(data=>{
      this.totalReq = data;
    //  console.log(data);
    })
    setTimeout(() => {
      this.unplacedGrads = this.totalGrads - this.selectedGrads;
      this.show = true;
    }, 500);
    this.sharedDashSer.getAllRequstion(num1).subscribe(data=>{
      this.requirementData = data;
      this.countRequirement = 0;
      for(let i = 0; i <  this.requirementData.length; i++){
        this.countRequirement += this.requirementData[i].noOfPositions;
      }
     // console.log(data);
    })
    setTimeout(() => {
       this.realRequirements = this.countRequirement - this.selectedGrads;
       if(this.realRequirements < 0){
        this.realRequirements = 0;
       }
     //  console.log(this.realRequirements);
    }, 500);
  }


}
