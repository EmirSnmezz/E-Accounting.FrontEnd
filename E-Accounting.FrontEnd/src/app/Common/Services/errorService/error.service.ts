import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { log } from 'console';
import { ToastrService, ToastrTypes } from '../ToastrService/toastr.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private _toastr: ToastrService) { }

  errorHandler(err: HttpErrorResponse)
  {
    switch(err.status){
      case 0:
        this._toastr.toast(ToastrTypes.Error, "Hata!", "Api adresine ulaşılamıyor!");
        break;

        case 404:
          this._toastr.toast(ToastrTypes.Error, "Hata!", "Api adresi bulunamıyor!");
          break;
          case 500:
            if(err.error){
              let message = JSON.stringify(err.error.Message)
              this._toastr.toast(ToastrTypes.Error,  message, "Hata!");
            }else{
              this._toastr.toast(ToastrTypes.Error, "Hata!", "Bir hata oluştu!");
            }

              break;
      default:
        break;
    }
  }
}
