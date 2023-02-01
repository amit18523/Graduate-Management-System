import { Component } from '@angular/core';
import { GlobalService } from 'src/app/global.service';
import { EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  dataSource: any;
  batches = [1, 2, 3];
  selectedBatch = 2;
  data: any;
  storeCurrent: any;
  selectedName: string;
  show = false;
  constructor(private approvalService: GlobalService) {
  }
  ngOnInit() {
    this.approvalService.batchEmitter.subscribe(data => {
      this.storeCurrent = data;
    })
  }
  sendApproval() {
    this.data = {
      batchName: this.storeCurrent,
      techCalendar: 1
    }
    this.approvalService.postApproval(this.data)
      .subscribe();

  }
  sendDisApproval() {
    this.data = {
      batchName: this.storeCurrent,
      techCalendar: -1
    }
    this.approvalService.postApproval(this.data)
      .subscribe();
  }
}
