import { Component, Input } from '@angular/core';
import { AuthenticationService } from '../../../Authentication/Services/authentication.service';
import { LoginResponseModel } from '../../../Authentication/Models/login-response.model';
import { log } from 'console';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Input("loginResponseModel")loginResponseModel = new LoginResponseModel();

  companyName: string = this.loginResponseModel.company.companyName;
  year = this.loginResponseModel.year;
  
  constructor(private _authencticationService: AuthenticationService){}
  
  logout()
  {
    localStorage.clear();
    this._authencticationService.logout();
  }

}
