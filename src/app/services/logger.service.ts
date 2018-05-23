import { Injectable } from "@angular/core";

@Injectable()
export class Logger{
    
    log(msg){
        console.log("Logger:" +msg)
    }

}

