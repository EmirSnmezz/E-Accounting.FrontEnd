import { Component } from '@angular/core';
import { AuthenticationService } from '../../../Authentication/Services/authentication.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private _authencticationService: AuthenticationService){}

  logout()
  {
    localStorage.clear();
    this._authencticationService.logout();
  }

}
