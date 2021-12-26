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
 @Input() sortBy: string;
 @Input() sessions: ISession[];
 visibleSessions: ISession[] = [];

 ngOnChanges() {
    if(this.sessions){
      this.filterSession(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc): this.visibleSessions.sort(sortByVotesDesc)
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

function sortByNameAsc(s1:ISession, s2:ISession){
  if(s1.name > s2.name) return 1;
  else if(s1.name === s2.name) return 0;
  return -1;
}
function sortByVotesDesc(s1:ISession, s2:ISession){
  return s1.voters.length - s2.voters.length ;
}

  

   

