import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared/event.service';


@Component({
  selector: 'events-list',
  template:`
  <div>
  <h2>Upcomming Angular Events</h2>
  <hr/>
                      <!-- (eventClick)="handleEventClicked($event)" 
                      <event-thumbnail #thumbnail  [event]="event" ></event-thumbnail>
                      <button class="btn btn-primary" (click)="thumbnail.logFoo()">logFooClick</button>-->

  <div class="row">
    <div *ngFor="let event of events" class="col-md-5">
      <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event" ></event-thumbnail>
    </div>
  </div>
</div>
  `
})
export class EventsListComponent implements OnInit {
  
  events:any[];
  constructor(private eventService: EventService, private toastr:ToastrService){
   
  }

  ngOnInit(){
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName){
    this.toastr.success(eventName);
  }
  // handleEventClicked(data){
  //   console.log(data);
  // }
}
