import { Component } from '@angular/core';
import { $ } from 'protractor';
import { EventService, ISession } from '../events/shared';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styles:[`
  li >a.active{color:#f97924}`]
})
export class NavBarComponent {
  searchTerm: string = "";
  foundSession: ISession[];
  constructor(public auth:AuthService,private eventService:EventService){
    
  }
  searchSessions(searchTerm){
    //console.log(searchTerm)
    this.eventService.searchSessions(searchTerm).subscribe(
      sessions => {
        this.foundSession = sessions;
        console.log(this.foundSession);
      }
    );
  }
}
