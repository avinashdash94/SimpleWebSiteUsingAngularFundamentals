import { Component, Input, OnInit } from "@angular/core";
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
export class SessionListComponent  {

 @Input() sessions: ISession[]

  

   
}
