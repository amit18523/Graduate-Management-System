import { AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
// import { DataSource } from '@angular/cdk/collections';
import { CdkTableModule} from '@angular/cdk/table';
import {DataSource} from '@angular/cdk/table';
import { TestService } from '../test.service';
import {Observable, of} from 'rxjs';
// import 'rxjs/add/observable/of';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  constructor(private st:TestService){}

  dataSource:any;
  
  ngOnInit() {
    this.st.getObj().subscribe(data=>{
            console.log(data.data);
            this.dataSource = data.data;
            console.log("datasource",this.dataSource);
          })
  }

 
  // displayedColumns: string[] = ['date', 'day', 'session', 'topic','objectives','trainer1','trainer2','training_material','exercise_material'];
 
  // data: PeriodicElement[] = [
  //   {date: 1, day: 'Hydrogen', session: 'H', topic: 'Java',objectives:'fvf',trainer1:'prina',trainer2:'gudhka',training_material:'hu',exercise_material:'dddv'},
  //   {date: 2, day: 'Helium', session: 'He', topic: 'angular',objectives:'fv',trainer1:'prina',trainer2:'gudhka',training_material:'hb',exercise_material:'gv'}
  // ];

  // datasource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.datasource.paginator = this.paginator;
  // }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  columns = [
   
    { columnDef: 'id', header: 'Id',    cell: (element: any) => `${element.id}` },
    { columnDef: 'email',     header: 'email',   cell: (element: any) => `${element.email}`     },
    { columnDef: 'first_name',   header: 'first_name', cell: (element: any) => `${element.first_name}`   },
   
    { columnDef: 'last_nam',   header: 'last_name', cell: (element: any) => `${element.last_nam}`   },
    // { columnDef: 'avatar',   header: 'avatar', cell: (element: any) => `${element.avatar}`   },
 
  ];

}

