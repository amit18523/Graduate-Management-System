import { Component, Input } from '@angular/core';
import { CurriculumDesignService } from '../curriculum-design.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-curriculum',
  templateUrl: './view-curriculum.component.html',
  styleUrls: ['./view-curriculum.component.scss']
})
export class ViewCurriculumComponent {

  constructor(private curriculumService:CurriculumDesignService){}
  @Input() val : any ; 
  dataSource:any;

  ngOnInit(): void {
    
    this.curriculumService.getTopic()
    .subscribe(data => {
      this.dataSource = data;
    });
    console.log("hello" + this.val);
  }
  columns = [
    { columnDef: 'id', header: 'Batch Id',    cell: (element: any) => `${element.batchId}` },
    { columnDef: 'batchName',  header: 'Batch Name',   cell: (element: any) => `${element.batchName}`},
    { columnDef: 'topicName',  header: 'Topic Name',   cell: (element: any) => `${element.topicName}`}
    
  ];


}
