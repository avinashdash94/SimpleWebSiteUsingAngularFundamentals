import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
import { EventService } from "./shared/event.service";

@Injectable()
export class EventListResolver implements Resolve<any>{
    constructor (private eventService:EventService){}
   resolve() {
       return this.eventService.getEvents().pipe(map(events => events))
   }
}
