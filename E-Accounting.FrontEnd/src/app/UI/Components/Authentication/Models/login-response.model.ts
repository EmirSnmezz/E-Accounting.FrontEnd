import { CompanyModel } from "./company.model";
import { TokenModel } from "./token.model";

export class LoginResponseModel {
    Token: TokenModel = new TokenModel();
    Email: string = "";
    UserId: string
    UserNameAndLastName: string = "";
    Companies: CompanyModel[] = [];
    Company: CompanyModel = new CompanyModel();
}