import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ISession } from "../shared";
import { EventService } from "../shared/event.service";

@Component({
  templateUrl:'./event-details.component.html',
  styles:[`
    .container { padding-left:20px; padding-rght:20px;}
    .event-image { height: 100px; }
    a {cursor:pointer}
  `]
})
export class EventDetailsComponent  {
    event:any;
    addMode:boolean;
    filterBy: string = 'all';
    sortBy: string = 'votes';
    
    constructor(private eventService: EventService, private route:ActivatedRoute){}
    ngOnInit(){
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }

    addSession(){
      this.addMode = true;
    }

    saveNewSession(session:ISession){     
      //console.log(session);
      //get max session Id from the list of sesssion to create id for new session
      const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
      session.id = nextId +1 ;
      this.event.sessions.push(session);
      this.eventService.updateEvent(this.event);
      this.addMode = false;
    }

    cancleAddSession(){this.addMode = false;}
 
}
