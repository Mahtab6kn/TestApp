import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
export interface user{
  position:number,
  course:string,
  time:any,
  duration:string,
  action:any
}
const data:user[]=[
  {position:1, course:'C++',  time:'6:00am-7:00pm', duration:'3 mon', action:''},
  {position:2, course:'JAVA', time:'7:00am-8:00pm', duration:'6 mon', action:''},
  {position:3, course:' C',   time:'8:00am-9:00pm', duration:'3 mon', action:''},
  {position:4,course:'PYTHON',time:'9:00am-10:00pm', duration:'6 mon',action:''},
  {position:5, course:'C#',   time:'10:00am-11:00pm',duration:'4 mon',action:''},
  {position:6, course:'HTML', time:'11:00am-12:00pm',duration:'3 mon',action:''},
  {position:7, course:'CSS',  time:'12:00am-1:00pm', duration:'3 mon',action:''},
  {position:8, course:'JS',   time:'1:00am-2:00pm', duration:'3 mon', action:''},
  {position:9,course:'C',     time:'2:00am-3:00pm', duration:'3 mon', action:''},
  {position:10,course:'C++',  time:'3:00am-4:00pm', duration:'3 mon', action:''},
  {position:11,course:'JAVA', time:'4:00am-5:00pm', duration:'3 mon', action:''},
  {position:12,course:'C#',   time:'5:00am-6:00pm', duration:'3 mon', action:''}
]
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements AfterViewInit{
  displayedColumns:string[]=[ 'position', 'course', 'time','duration','action'];
  source =new MatTableDataSource(data);
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  ngAfterViewInit(){
    this.source.paginator=this.paginator;
  }

}
