import { Injectable } from '@angular/core';
import * as crypto from 'crypto-ts'
declare var require: any;
@Injectable({
  providedIn: 'root',
})
export class CyrptoService {
  constructor() { }

  encrypto(value: string): string{
    var CryptoTS = require('crypto-ts');
    return CryptoTS.AES.encrypt(value, 'secret key 123').toString();
  }

  decrypto(value: string): string{
    var CryptoTS = require('crypto-ts');
    var bytes = CryptoTS.AES.decrypt(value, 'secret key 123');
    return bytes.toString(CryptoTS.enc.Utf8);
  }

}
