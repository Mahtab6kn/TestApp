import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent{
     
  signupForm: FormGroup;
  firstName: string="";
  lastName: string='';
  email:string='';
  password:string='';

   constructor(private builder:FormBuilder){
       this.signupForm = builder.group(
        {
          fName: new FormControl(),
          lName: new FormControl(),
          email: new FormControl(),
          password: new FormControl()
        }
       );
   }
}
