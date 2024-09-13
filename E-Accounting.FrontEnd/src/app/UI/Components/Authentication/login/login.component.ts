import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {Form, FormsModule} from '@angular/forms'
import { InputValidDirective } from '../../../../Common/input-valid.directive';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterLink, FormsModule, InputValidDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formRequest(data : any){
  }

}
