import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { PeriodicElement } from './periodic-element';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
// import { DataSource } from '@angular/cdk/collections';
import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';
import { TestService } from '../test.service';
import {Observable, of} from 'rxjs';
// import 'rxjs/add/observable/of';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit{

  constructor(private st:TestService){}

  dataSource:any;
  
  ngOnInit() {
    this.st.getObj().subscribe(data=>{
            console.log(data.data);
            this.dataSource = data.data;
            // console.log("datasource",this.dataSource);
          })
  }



  @ViewChild(MatPaginator) paginator: MatPaginator;

  columns = [
   
    { columnDef: 'id', header: 'Id',    cell: (element: any) => `${element.id}` },
    { columnDef: 'email',     header: 'email',   cell: (element: any) => `${element.email}`     },
    { columnDef: 'first_name',   header: 'first_name', cell: (element: any) => `${element.first_name}`   },
   

 
  ];

  displayedColumns = this.columns.map(c => c.columnDef);
  

}

