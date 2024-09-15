import { CommonModule } from '@angular/common';
import { Component, Inject,  } from '@angular/core';
import { Router, RouterEvent, RouterLink } from '@angular/router';
import {Form, FormGroup, FormsModule, NgForm} from '@angular/forms'
import { InputValidDirective } from '../../../../Common/Directives/Input-validtation-directive/input-valid.directive';
import { LoadingButtonComponent } from "../../../../Common/Components/loading-button/loading-button.component";
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, InputValidDirective, LoadingButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoading: boolean = false;
  constructor(@Inject(Router) private _router: Router){}
  Login(form : NgForm) {

    if(form.valid)
    {
      this.isLoading = true;
      localStorage.setItem("accessToken", "true")
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    }
}
}
