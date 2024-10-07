import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { LoginResponseModel } from "../../../UI/Components/Authentication/Models/login-response.model";
import { CryptoService } from "../cryptoService/crypto.service";
import { encode } from "punycode";
declare var localStorage;

@Injectable({
    providedIn: 'root'
})

export class LoginResponseService {

    loginResponseModel: LoginResponseModel = new LoginResponseModel();

    constructor(private _cyrptoService: CryptoService, @Inject(PLATFORM_ID) _platform) {}

    getLoginReponseModel() {
        var token = localStorage.getItem("accessToken")?.toString();
        let loginResponseString = this._cyrptoService.decrypto(token);
        this.loginResponseModel = JSON.parse(loginResponseString)
        return this.loginResponseModel;
    }
}