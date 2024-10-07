import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ErrorService } from '../errorService/error.service';
import { jwtDecode } from "jwt-decode";
import { LoginResponseModel } from '../../../UI/Components/Authentication/Models/login-response.model';
import { LoginResponseService } from '../loginResponseService/login-response.service';
import { CryptoService } from '../cryptoService/crypto.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { changeLoading } from '../../State/loading/loading.actions';

declare var localStorage;

@Injectable({
  providedIn: 'root'
})
export class GenericHttpClientService {
  apiUrl: string = "https://localhost:7019/api/";
  token: string = "";
  isBrowser: boolean = true;
  isLoading: boolean = false ;
  loginResponseModel: LoginResponseModel = new LoginResponseModel();

  constructor(private _http: HttpClient, private _errorService: ErrorService, private _loginReponseService: LoginResponseService, private _cryptoService: CryptoService, private _router: Router, private _store: Store<{loading: boolean}>) {
    this._store.select("loading").subscribe(res =>{
      this.isLoading = res;
    })
  }

  get<T>(api: string, callBack: (res: T) => void, authorize: boolean = true, diffApi: boolean = false) {
    this.getToken();
    if(!this.isLoading)
    {
      this._store.dispatch(changeLoading())
    }
    this._http.get<T>(`${this.setApi(diffApi, api)}`, this.setOptions(authorize)).subscribe({
      next: (res) => {
        if(this.isLoading)
        {
          this._store.dispatch(changeLoading())
        }
        callBack(res)
      },
      error: (err: HttpErrorResponse) => {
        if(this.isLoading)
        {
          this._store.dispatch(changeLoading())
        }
        this._errorService.errorHandler(err)
      } 
      
    });
  }
  post<T>(api: string, model: any, callBack: (res: T) => void, authorize: boolean = true, diffApi: boolean = false) {
    this.getToken();
    if(!this.isLoading)
      {
        this._store.dispatch(changeLoading())
      }
      this._http.post<T>(`${this.setApi(diffApi, api)}`, model, this.setOptions(authorize)).subscribe(
      {
        next: (res) => {
          this._store.dispatch(changeLoading())
          callBack(res)
        },
        error: (err: HttpErrorResponse) => {
          if(this.isLoading){
            this._store.dispatch(changeLoading())
          }
          this._errorService.errorHandler(err)
        } 
      });
  }

  setApi(diffApi: boolean, api: string): string {
    if (diffApi) {
      return api;
    }

    return this.apiUrl + api;
  }

  setOptions(authorize: boolean): Object {
    if (authorize) {
      return { headers: { "Authorization": `Bearer ${this.token}` } };
    }
    return {};
  }

  getToken()
  {
    let accessToken = localStorage.getItem("accessToken")
    if(accessToken == undefined || accessToken == null){
      return;
    }
    this.loginResponseModel = this._loginReponseService.getLoginReponseModel();
    this.token = this.loginResponseModel.token.token;
    if (this.token != undefined && this.token != "" && this.token != null) {
      var decoded: any = jwtDecode(this.token)
      let time: number = new Date().getTime() / 1000
      let refreshTokenTime = new Date(this.loginResponseModel.token.refreshTokenExperies).getTime() / 1000;
      if (time > decoded.exp) {
        if(refreshTokenTime >= time)
        {
          let model: {userId: string, refreshToken: string, companyId: string} = 
          {
            userId: this.loginResponseModel.userId, 
            refreshToken: this.loginResponseModel.token.refreshToken, 
            companyId: this.loginResponseModel.company.companyId
          };

          this._http.post<LoginResponseModel>(this.apiUrl + "Auth/GetTokenByRefreshToken", model  ).subscribe({
            next: (res) =>{
              let cryptoValue = this._cryptoService.encrypto(JSON.stringify(res));
              localStorage.setItem("accessToken", cryptoValue);
              this.loginResponseModel = res;
              this.token = this.loginResponseModel.token.token;
            },
            error: (err) =>{
              this._errorService.errorHandler(err);
              console.log(err);
              localStorage.removeItem("accessToken");
              this._router.navigateByUrl("/login");
            }
          })
        }
        else{
          localStorage.removeItem("accessToken");
          this._router.navigateByUrl("/login");
        }
      }
    }
  }
}
