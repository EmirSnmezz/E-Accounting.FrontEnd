import { Injectable } from '@angular/core';
import { GenericHttpClientService } from '../../../../Common/Services/HttpService/generic-http-clients.service';
import { ResponseModel } from '../../../../Common/Models/response.model';
import { ReportModel } from '../models/report.model';
import { LoginResponseService } from '../../../../Common/Services/loginResponseService/login-response.service';
import { RequestModel } from '../../../../Common/Models/request.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  apiUrl: "Reports/GetAll"
  constructor(private _http: GenericHttpClientService, private _loginResponse: LoginResponseService) 
  {
  }

  getAll(callBack: (res: ReportModel[]) => void )
  {
    let model: RequestModel = new RequestModel();
    model.companyId = this._loginResponse.getLoginReponseModel().company.companyId
    this._http.post<ResponseModel<ReportModel[]>>(this.apiUrl, model, res => {
      callBack(res.data);
    } )
  }
}
