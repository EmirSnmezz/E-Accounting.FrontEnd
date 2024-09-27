import { Injectable } from '@angular/core';
import { GenericHttpClientService } from '../../../../Common/Services/HttpService/generic-http-clients.service';
import { LoginResponseModel } from '../Models/login-response.model';
import { Router } from '@angular/router';
import { CryptoService } from '../../../../Common/Services/cryptoService/crypto.service';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  api: string = "Auth/Login";
  constructor(private _httpClient: GenericHttpClientService, private _router: Router, private _crypto: CryptoService) { }

  login(model:any)
  {
    this._httpClient.post<LoginResponseModel>(this.api, model, res =>
    {
      let cryptoValue = this._crypto.encrypto(JSON.stringify(res))
      localStorage.setItem("accessToken", cryptoValue);
      this._router.navigateByUrl("");
    })
  }

  logout()
  {
   localStorage.removeItem("accessToken");
    this._router.navigateByUrl("/login");
  }
}
