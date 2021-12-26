import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { ISession } from "../shared";
@Component({
    selector:'session-list',
  templateUrl:'./session-list.component.html',
  styles:[`
  em {float:right; color:#E05C65; padding-left: 10px;}
  .error input, .error select, .error textarea {backgroud: #E3C3C5 !important}
  .error :: -webkit-input-placeholder {color: #999;}
  .error :: -moz-placeholder {color: #999;}
  .error : -moz-placeholder {color: #999;}
  .error : ms-input-placeholder {color: #999;}
  `]
})
export class SessionListComponent implements OnChanges {
 
 @Input() filterBy: string;
 @Input() sessions: ISession[];
 visibleSessions: ISession[] = [];

 ngOnChanges() {
    if(this.sessions){
      this.filterSession(this.filterBy);
    }
  }
  filterSession(filter){
    if(filter === 'all'){
     this.visibleSessions = this.sessions.slice(0);
    }
    else{
      this.visibleSessions = this.sessions.filter(session =>{
        return session.level.toLocaleLowerCase() === filter
      })
    }
  }
}

  

   

