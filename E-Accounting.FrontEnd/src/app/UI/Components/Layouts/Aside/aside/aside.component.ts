import { Component, Inject, InjectionToken, Input, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import { AuthenticationService } from '../../../Authentication/Services/authentication.service';
import { LoginResponseModel } from '../../../Authentication/Models/login-response.model';
import { Navigations } from '../../../../router/navigation';
@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
 @Input()loginResponseModel = new LoginResponseModel();
  navigations = Navigations

  constructor(private _router: Router, private _authencticationService: AuthenticationService)
  {}
}
