import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  title = 'some useful events';
  getValue(val:string){
    console.log(val);
    // console.warn(val); 
    // console.count(val);
    // console.countReset(val);
    // console.error(val);
  }
}
