import { DataSource } from '@angular/cdk/collections';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { GlobalService } from 'src/app/global.service';
import { Task } from 'src/app/graduate/feedback/shared/models/task.model';
// import {MatPaginator, MatTableDataSource} from '@angular/material';
import { batchesGet } from '../reuse';
@Component({
  selector: 'app-reuseable-table',
  templateUrl: './reuseable-table.component.html',
  styleUrls: ['./reuseable-table.component.scss']
})
export class ReuseableTableComponent implements OnInit {

  @Input() rowData: any;
  @Input() colData: any;
  

  rows: any;
  columns: any;
  displayedColumns: any;
  dataSource:any;
  apiResponse : any;
  batches :any;
  storeBatchName : batchesGet[];
  show : boolean = false;
  constructor(private global : GlobalService){
  }
  tasks : Task[] = [];
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.rowData);
    this.columns = this.colData;
    // console.log("hi");
    //console.log(this.dataSource);
    this.displayedColumns = this.columns.map((c: { columnDef: any; }) => c.columnDef);
    //console.log(this.dataSource);
    this.batches = this.rowData;
    //console.log(this.storeBatchName);
    this.global.getAllBatches().subscribe(data=>{
      this.storeBatchName = data;
    })
      this.dataSource.filterPredicate = (data: any, filter: string) => {
        return data.batchName == filter;
    }
  }
 

  filterData(num: any){
    this.dataSource.filter = num;
    this.global.emitBatchId(num);
    this.show = true;
  }


}
