import { OnInit } from "@angular/core";

export class LoginDetailsService {
    constructor() {

    }
    AuthenticateUser(userid: any, password: any) {
        if(userid === 'Administrator' && password === '123') {
            return true;
        } else {
            return false;
        }
    }
}