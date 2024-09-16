import { Injectable } from '@angular/core';
import { GenericHttpClientService } from '../../../../Common/Services/HttpService/generic-http-clients.service';
import { LoginResponseModel } from '../Models/login-response.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  api: string = "https://localhost:7019/api/Auth/Login";
  constructor(private _httpClient: GenericHttpClientService, private _router: Router) { }

  login(model:any)
  {
    this._httpClient.post<LoginResponseModel>(this.api, model, res =>
    {
      localStorage.setItem("accessToken", JSON.stringify(res));
      this._router.navigateByUrl("");
    })
  }
}
