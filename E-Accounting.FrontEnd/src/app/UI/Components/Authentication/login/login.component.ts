import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {Form, FormGroup, FormsModule, NgForm} from '@angular/forms'
import { InputValidDirective } from '../../../../Common/input-valid.directive';
import { LoginModel } from '../Model/login.model';
import { log } from 'console';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLink, FormsModule, InputValidDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

isDisabled? : boolean;
  Login(form : NgForm) {

    if(form.valid)
    {
      console.log(form.dirty);
      console.log(form.value);
      
    }
}
}
