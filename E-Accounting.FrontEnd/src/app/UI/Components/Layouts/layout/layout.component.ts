import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginResponseModel } from '../../Authentication/Models/login-response.model';
import { CryptoService } from '../../../../Common/Services/cryptoService/crypto.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  loginResponsestring = this._cyrptoService.decrypto(localStorage.getItem("accessToken").toString());
  loginResponseModel: LoginResponseModel = new LoginResponseModel();
  constructor(private _cyrptoService: CryptoService){
    this.loginResponseModel =  JSON.parse(this.loginResponsestring)
    console.log(this.loginResponseModel);
    
  }
}
