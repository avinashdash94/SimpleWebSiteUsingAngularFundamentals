import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../common/toastr.service';
import { IEvent } from './shared';
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
  
  events:IEvent[];
  constructor(private eventService: EventService, private toastr:ToastrService, private route:ActivatedRoute){
   
  }

  ngOnInit(){
    //this.eventService.getEvents().subscribe(events => {this.events = events});
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(eventName){
    this.toastr.success(eventName);
  }
  // handleEventClicked(data){
  //   console.log(data);
  // }
}
