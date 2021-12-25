import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from ".";
@Component({
  templateUrl:'./create-event.component.html',
  styles:[`
  em {float:right; color:#E05C65; padding-left: 10px;}
  .error input {backgroud: #E3C3C5 !important}
  .error :: -webkit-input-placeholder {color: #999;}
  .error :: -moz-placeholder {color: #999;}
  .error : -moz-placeholder {color: #999;}
  .error : ms-input-placeholder {color: #999;}
`]
 
})
export class CreateEventComponent  {
  event:any
  isDirty:boolean = true;
    constructor(private route:Router, private eventService:EventService){}
    cancel(){
        this.route.navigate(['/events']);
    }

    ngOnInit(){
      this.event ={
        name:'Ng Spectacular',
        date: '8/8/2028',
        time:'10am',
        price:799.99,        
        location:{
            address:'456 Happy St',
            city:'Felicity',
            country:'Angulaistan'
        },
        onlineUrl:'http://ngSpectacular.com',
        imageUrl:'http://ngSpectacular.com/logo.png'
      }
    }

    saveEvent(formValue){
      console.log(formValue);
      this.eventService.saveEvent(formValue);
      this.isDirty = false;
      this.route.navigate(['/events']);
    }







    // event:any;
     
    // ngOnInit(){
    //     this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    // }
 
}
