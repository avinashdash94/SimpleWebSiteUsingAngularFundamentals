import { Component, Inject, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service';
import { AuthService } from './auth.service';

@Component({
  templateUrl:'./profile.component.html',
  styles:[`
  em {float:right; color:#E05C65; padding-left: 10px;}
  .error input {backgroud: #E3C3C5 !important}
  .error :: -webkit-input-placeholder {color: #999;}
  .error :: -moz-placeholder {color: #999;}
  .error : -moz-placeholder {color: #999;}
  .error : ms-input-placeholder {color: #999;}
`]
})
export class ProfileComponent implements OnInit {

  profileForm:FormGroup
  private firstName: FormControl
  private lastName: FormControl

  constructor(private authService: AuthService, 
    private router:Router,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) // Inject helps non injectable class to inject here as service
    {

  }

  ngOnInit(): void {
   // console.log("sdft",this.authService.currentUser.firstName)
      this.firstName = new FormControl(this.authService.currentUser.firstName,[Validators.required, Validators.pattern('[a-zA-Z].*')]); 
      this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]); 
      this.profileForm = new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName
      });
  }

  cancle(){
    this.router.navigate(['/events']);
  }

  saveProfile(formValue){
    if(this.profileForm.valid){
      this.authService.updateCurrentUser(formValue.firstName, formValue.lastName);
      // this.router.navigate(['/events']);
      this.toastr.success('Profile Saved');
    }
  }

  validateFirstName(){
    return this.firstName.valid ||  this.firstName.untouched
  }
  validateLastName(){
    return this.lastName.valid ||  this.lastName.untouched
  }
}
