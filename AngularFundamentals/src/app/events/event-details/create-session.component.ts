import { Component, OnInit } from "@angular/core";
import { ControlContainer, FormControl, FormGroup, Validators } from "@angular/forms";
import { ISession, restricteWords } from "../shared";
@Component({
  templateUrl:'./create-session.component.html',
  styles:[`
  em {float:right; color:#E05C65; padding-left: 10px;}
  .error input, .error select, .error textarea {backgroud: #E3C3C5 !important}
  .error :: -webkit-input-placeholder {color: #999;}
  .error :: -moz-placeholder {color: #999;}
  .error : -moz-placeholder {color: #999;}
  .error : ms-input-placeholder {color: #999;}
  `]
})
export class CreateSessionComponent implements OnInit  {
  name:FormControl
  presenter:FormControl
  duration:FormControl
  level:FormControl
  abstract:FormControl
  newSessionForm: FormGroup

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required)
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restricteWords(['foo','bar'])]);

    this.newSessionForm = new FormGroup({
      name :this.name,
      presenter: this.presenter,
      duration: this.duration,
      level:this.level,
      abstract:this.abstract,
     

    })
  }

  //To Ristrict the text area
  

  //To save Sesssion Form Data
  saveSession(formVale){
      // console.log(formVale);
      let session:ISession ={
        id: undefined,
        name :formVale.name,
        presenter: formVale.presenter,
        duration: +formVale.duration,
        level:formVale.level,
        abstract:formVale.abstract,
        voters:[]
      }
      console.log(session);
  }
   
}
