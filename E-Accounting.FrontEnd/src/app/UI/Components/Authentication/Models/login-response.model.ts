import { CompanyModel } from "./company.model";
import { TokenModel } from "./token.model";

export class LoginResponseModel {
    token: TokenModel = new TokenModel();
    email: string = "";
    userId: string
    userNameAndLastName: string = "";
    companies: CompanyModel[] = [];
    company: CompanyModel = new CompanyModel();
    year: number = 0;
}