import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'event-thumbnail',
  templateUrl: './events-thumbnail.component.html',
  
  styles:[`
  .green {color: #003300 !important; }
  .bold {font-size: 20px; }
    .thumbnail {min-height:210px;}
    .pad-left {margin-left:10px;}
    .well div {color: #bbb;}
  `]
})
export class EventsThumbnailComponent {
  title = 'AngularFundamentals';
  @Input() event: any;
  //@Output() eventClick = new EventEmitter();
  // handleClickMe(){
  //   this.eventClick.emit(this.event.name);
  // }
 
  logFoo(){
    console.log('logFoo');
  }

  getStartTimeClass(){

    if( this.event.time==='8:00 am' && this.event)
    return ['green', 'bold'];

    return [];
    //Or
    // if( this.event.time==='8:00 am' && this.event)
    // return 'green bold';

    // return '';
    ///OR
    // const isEarlyStart = this.event.time==='8:00 am' && this.event;
    // return {green:isEarlyStart , bold: isEarlyStart }
  }

  getStartTimeStyle(): any{
    if( this.event.time==='8:00 am' && this.event)
    return {color: '#003300 !important;', 'font-weight':'bold'};

    return {};
    //Or
  }

}
