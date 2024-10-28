import { Injectable } from '@angular/core';
import { GenericHttpClientService } from '../../../../Common/Services/HttpService/generic-http-clients.service';
import { ResponseModel } from '../../../../Common/Models/response.model';
import { ReportModel } from '../models/report.model';
import { LoginResponseService } from '../../../../Common/Services/loginResponseService/login-response.service';
import { RequestModel } from '../../../../Common/Models/request.model';
import { ReportRequestModel } from '../../../../Common/Models/report-request.model';
import { MessageResponseModel } from '../../../../Common/Models/message-response.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private _http: GenericHttpClientService, private _loginResponse: LoginResponseService) 
  {
  }

  getAll(callBack: (res: ReportModel[]) => void){
    let model:RequestModel = new RequestModel();
    model.companyId = this._loginResponse.getLoginReponseModel().company.companyId;
    this._http.post<ResponseModel<ReportModel[]>>("Report/GetAllReport", model, res =>{
      callBack(res.data);
    })
  }

  request(model: ReportRequestModel, callBack: (res: MessageResponseModel) => void)
  {
    model.companyId = this._loginResponse.getLoginReponseModel().company.companyId;
    this._http.post<MessageResponseModel>("Report/RequestReport", model, res => {
      callBack(res);
    })
  }
}
