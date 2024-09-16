
import * as CRYPTOJS from 'crypto-js'
import { Injectable } from '@angular/core';
    declare var require: any;
@Injectable({
    providedIn: 'root'
  })
export class CryptoService{
    CRYPTOJS = CRYPTOJS;
    constructor(){}

    encrypto(value: string): string
    {   
        return this.CRYPTOJS.AES.encrypt(value, 'secret key 123').toString();
    }

    decrypto(value: string): string
    {
        var byte = this.CRYPTOJS.AES.decrypt(value, 'secret key 123');
        return byte.toString(this.CRYPTOJS.enc.Utf8);
    }

}