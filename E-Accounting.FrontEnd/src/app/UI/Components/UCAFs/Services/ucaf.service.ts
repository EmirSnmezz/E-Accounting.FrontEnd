import { Injectable } from '@angular/core';
import { GenericHttpClientService } from '../../../../Common/Services/HttpService/generic-http-clients.service';
import { UCAFModel } from '../ucafs/Ucaf/ucafModels/create.ucaf.models';
import { CryptoService } from '../../../../Common/Services/cryptoService/crypto.service';
import { LoginResponseModel } from '../../Authentication/Models/login-response.model';
import { callbackify } from 'util';
import { ResponseModel } from '../../../../Common/Models/response.model';
import { MessageResponseModel } from '../../../../Common/Models/message-response.model';
import { ToastrService } from '../../../../Common/Services/ToastrService/toastr.service';
import { RemoveUcafModel } from '../ucafs/Ucaf/ucafModels/remove.ucaf.model';
import { LoginResponseService } from '../../../../Common/Services/loginResponseService/login-response.service';

@Injectable({
  providedIn: 'root'
})
export class UCAFService {

  loginResponseModel: LoginResponseModel = new LoginResponseModel();

  constructor(private _http: GenericHttpClientService, private _loginReponseService: LoginResponseService) {  
    this.loginResponseModel = _loginReponseService.getLoginReponseModel();
  }

  getAll(callBack: (res: ResponseModel<UCAFModel[]>) => void) {
    let model = { companyId: this.loginResponseModel.company.companyId }
    this._http.post<ResponseModel<UCAFModel[]>>("UCAFS/GetAllUCAF", model, res => callBack(res))
  }

  add(model: UCAFModel, callBack: (res: MessageResponseModel) => void) {
    model.companyId = this.loginResponseModel.company.companyId;
    this._http.post<MessageResponseModel>("UCAFS/CreateUCAF", model, (res) => callBack(res))
  }

  getByCode(model: UCAFModel, callBack: (res: UCAFModel) => void) {
    model.companyId = this.loginResponseModel.company.companyId;
    this._http.post<UCAFModel>("GetByCodeUCAF", { companyId: model.companyId, code: model.code }, (res) => callBack(res))
  }

  remove(model: RemoveUcafModel, callBack: (res: MessageResponseModel) => void) {
    model.companyId = this.loginResponseModel.company.companyId;
    this._http.post<MessageResponseModel>("UCAFS/RemoveByIdUcaf", { id: model.id, companyId: model.companyId }, (res) => callBack(res))
  }

  createMainUcafs(callBack: (res: MessageResponseModel) => void) {
    var companyId = this.loginResponseModel.company.companyId;
    this._http.post<MessageResponseModel>("UCAFS/CreateMainUCAF", { companyId: companyId }, res => callBack(res))
  }

  update(model: UCAFModel, callBack: (res: MessageResponseModel) => void) {
    model.companyId = this.loginResponseModel.company.companyId;
    this._http.post<MessageResponseModel>("UCAFS/UpdateUCAF", model, res => callBack(res))
  }
}
