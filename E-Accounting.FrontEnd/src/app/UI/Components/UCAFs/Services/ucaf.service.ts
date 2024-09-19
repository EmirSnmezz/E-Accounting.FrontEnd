import { Injectable } from '@angular/core';
import { GenericHttpClientService } from '../../../../Common/Services/HttpService/generic-http-clients.service';
import { UCAFModel } from '../ucaf.models';
import { CryptoService } from '../../../../Common/Services/cryptoService/crypto.service';
import { LoginResponseModel } from '../../Authentication/Models/login-response.model';
import { callbackify } from 'util';
import { ResponseModel } from '../../../../Common/Models/response.model';

@Injectable({
  providedIn: 'root'
})
export class UCAFService {

  loginResponseModel: LoginResponseModel = new LoginResponseModel();
  loginResponsestring = this._cyrptoService.decrypto(localStorage.getItem("accessToken").toString());

  constructor(
    private _cyrptoService: CryptoService, 
    private _http: GenericHttpClientService)
    {
    this.loginResponseModel =  JSON.parse(this.loginResponsestring)
    console.log(this.loginResponseModel);
  }

  getAll(callBack: (res: ResponseModel<UCAFModel[]>) => void)
  {
    let model = {companyId: this.loginResponseModel.company.companyId}
    this._http.post<ResponseModel<UCAFModel[]>>("UCAFS/GetAllUCAF", model, res => callBack(res) )
    
  }
}
