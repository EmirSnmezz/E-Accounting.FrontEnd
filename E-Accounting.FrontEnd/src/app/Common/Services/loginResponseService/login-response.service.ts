import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { LoginResponseModel } from "../../../UI/Components/Authentication/Models/login-response.model";
import { CryptoService } from "../cryptoService/crypto.service";
import { GenericHttpClientService } from "../HttpService/generic-http-clients.service";
import { platform } from "os";

declare var localStorage;

@Injectable({
    providedIn: 'root'
})

export class LoginResponseService {

    loginResponseModel: LoginResponseModel = new LoginResponseModel();

    constructor(private _cyrptoService: CryptoService, @Inject(PLATFORM_ID) _platform) {
        let token = localStorage.getItem("accessToken")?.toString();
        if (token != undefined) {
            let loginResponseString = _cyrptoService.decrypto(token);
            this.loginResponseModel = JSON.parse(loginResponseString)
        }
    }

    getLoginReponseModel() {
        return this.loginResponseModel;
    }

}