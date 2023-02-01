import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  dataSource : any;
  selectedName : string;
  data: any;

  constructor(private approvalService: GlobalService) {
  }
  ngOnInit(){
    this.approvalService.batchEmitter.subscribe(data =>{
      this.selectedName = data;
   })
  }
  onChangeValue(newValue: any) {
    console.log(newValue);
    this.selectedName = newValue;
  }
  sendApproval() {
    this.data = {
      batchName: this.selectedName,
      techCurriculum: 1,
    }
    
    this.approvalService.postApproval(this.data)
    .subscribe(); 
  }
  sendDisApproval() {
    this.data = {
      batchName: this.selectedName,
      techCurriculum: -1
    }
    this.approvalService.postApproval(this.data)
      .subscribe();
  }
}
