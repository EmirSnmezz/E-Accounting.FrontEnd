import { Injectable } from '@angular/core';

declare const $:any ;
declare const toastr: any;
@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { }

  toast(type: ToastrTypes, title: string, message: string)
  {
    switch(type)
    {
      case ToastrTypes.Success:
        toastr.success(title, message)
        break;

      case ToastrTypes.Error:
        toastr.error (title, message)
        break;

      case ToastrTypes.Warning:
        toastr.warning(title, message)
        break;

      case ToastrTypes.Info:
        toastr.info(title, message)
        break;

      default:
        break;
    }
  }
}

export enum ToastrTypes
{
  Success,
  Error,
  Warning,
  Info
}
