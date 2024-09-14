import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { Router, RouterEvent, RouterLink } from '@angular/router';
import {Form, FormGroup, FormsModule, NgForm} from '@angular/forms'
import { InputValidDirective } from '../../../../Common/Directives/Input-validtation-directive/input-valid.directive';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLink, FormsModule, InputValidDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(@Inject(Router) private _router: Router){}

isDisabled? : boolean;
  Login(form : NgForm) {

    if(form.valid)
    {
      console.log(form.dirty);
      // console.log(form.value);
      localStorage.setItem("accessToken", "true")
    }
}
}
