import { Injectable } from "@angular/core";
import { UserService } from './user.service';

@Injectable()
export class BetterLogger{
    constructor(private user: UserService){}
    log(msg){
        console.log("Logger msg" +msg +" for " +this.user.getUser());
    }

}