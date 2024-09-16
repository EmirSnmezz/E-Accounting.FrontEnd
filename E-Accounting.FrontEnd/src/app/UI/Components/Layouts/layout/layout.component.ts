import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginResponseModel } from '../../Authentication/Models/login-response.model';
import { CryptoService } from '../../../../Common/Services/cryptoService/crypto.service';
import { NavbarComponent } from "../Navbar/navbar/navbar.component";
import { AsideComponent } from "../Aside/aside/aside.component";
import { FooterComponent } from "../Footer/footer/footer.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent, AsideComponent, FooterComponent],
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
