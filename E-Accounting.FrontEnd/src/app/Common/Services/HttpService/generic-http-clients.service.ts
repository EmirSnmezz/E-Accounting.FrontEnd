import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ErrorService } from '../errorService/error.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpClientService {

  apiUrl: string = "";
  token: string = "";
  isBrowser: boolean = true;

  constructor(private _http: HttpClient, private _errorService: ErrorService, @Inject(PLATFORM_ID) private _platformID) 
  {
    if(isPlatformBrowser(_platformID) && this.token == "")
      {
        this.isBrowser = true;
        this.token= localStorage.getItem("accessToken")?.toString();
      }   
    else
    {
      this.isBrowser = false;
    }
  }

  get<T>(api: string, callBack: (res: T) => void, authorize: boolean = true, diffApi: boolean = false) {
    this._http.get<T>(`${this.setApi(diffApi, api)}`, this.setOptions(authorize)).subscribe({
      next: (res) => callBack(res),
      error: (err: HttpErrorResponse) => this._errorService.errorHandler(err)
    });
  }
  post<T>(api: string, model: any, callBack: (res: T) => void, authorize: boolean = true, diffApi: boolean = false) {
    this._http.post<T>(`${this.setApi(diffApi, api)}`, model, this.setOptions(authorize)).subscribe(
      {
        next: (res) => callBack(res),
        error: (err: HttpErrorResponse) => this._errorService.errorHandler(err)
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
      return { headers: { "Authorization": `Bearer ${localStorage.getItem(this.token)}` } };
    }
    return {};
  }
}
