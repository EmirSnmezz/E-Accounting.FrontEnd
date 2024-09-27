import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule, NgForm} from '@angular/forms'
import { InputValidDirective } from '../../../../Common/Directives/Input-validtation-directive/input-valid.directive';
import { LoadingButtonComponent } from "../../../../Common/Components/loading-button/loading-button.component";
import { AuthenticationService } from '../Services/authentication.service';
import { Store } from '@ngrx/store';
import { changeLoading } from '../../../../Common/State/loading/loading.actions';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, InputValidDirective, LoadingButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private _authenticationService: AuthenticationService, private store: Store<{loading: boolean}>)
  {
  }
  Login(form : NgForm) {
    if(form.valid)
    {
      this.store.dispatch(changeLoading())
      this._authenticationService.login(form.value);
    }
}
}
