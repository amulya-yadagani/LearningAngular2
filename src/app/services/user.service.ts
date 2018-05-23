import { Injectable } from "@angular/core";

@Injectable()
export class UserService{
    isAuthorized;
    getUser(){
        return {name:"Amulya", isAuthorized: true};
    }
}