import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class AppStateService {
    private dispatcherMap: Object = {};

    dispatch(obj) {
        if (obj.type && this.dispatcherMap.hasOwnProperty(obj.type)) {
            let subject = this.dispatcherMap[obj.type];
            subject.subscribe(v => console.log(v))
            subject.emit(obj);
        }
    }

    subscribe(type, nextfunc) {
        if (!(this.dispatcherMap.hasOwnProperty(type))) {
            this.dispatcherMap[type] = new EventEmitter();
        }
        let subscription = this.dispatcherMap[type].subscribe(nextfunc);
        return subscription;
    }

}