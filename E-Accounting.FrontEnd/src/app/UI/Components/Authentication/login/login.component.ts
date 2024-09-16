import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm} from '@angular/forms'
import { InputValidDirective } from '../../../../Common/Directives/Input-validtation-directive/input-valid.directive';
import { LoadingButtonComponent } from "../../../../Common/Components/loading-button/loading-button.component";
import { AuthenticationService } from '../Services/authentication.service';
import { ToastrService, ToastrTypes } from '../../../../Common/Services/ToastrService/toastr.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, InputValidDirective, LoadingButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isLoading: boolean = false;
  constructor(private _authenticationService: AuthenticationService, private _toastr: ToastrService)
  {
    _toastr.toast(ToastrTypes.Success, "Deneme Başlık", "Deneme İçerik");
  }
  Login(form : NgForm) {

    if(form.valid)
    {
      this._authenticationService.login(form.value);
    }
}
}
