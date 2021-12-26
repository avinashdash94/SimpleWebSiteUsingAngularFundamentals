import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
// import { ToastrService } from './common/toastr.service';
import { Toastr, TOASTR_TOKEN } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from 'src/routes';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/shared/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/event-list-resolver.service';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionComponent, SessionListComponent } from './events/event-details';
import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { DurationPipe } from './events/shared';
//import { CreateSessionComponent } from '.events/index';

declare let toastr:Toastr; //Declare toastr service as it is global
@NgModule({
  imports: [
    BrowserModule,
    // AppRoutingModule
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  
  providers: [
    EventService,
    // ToastrService,   // Toster service using Class as injectable
    {provide:TOASTR_TOKEN, useValue: toastr},   // Toster service using InjectionToken as injectable Here  we are telling Use TOASTR_TOKEN for toastr whenever we need it
    EventRouteActivator, //this syntax is same as {provide:EventRouteActivator, useClass: EventRouteActivator}   it is long hand way and which we used is sort hand
    AuthService,
    {
      provide:'canDeactivateCreateEvent',
       useValue: checkDirtyState
    },
    EventListResolver
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty)
    return window.confirm("You have not save this event, do you really want to cancle?")
  return true;
}