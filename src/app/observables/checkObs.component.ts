import { Component, OnInit } from "@angular/core";
import { Observable, pipe, Subject, BehaviorSubject  } from "rxjs";
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-obs',
    template: `<h2>Observables</h2>
    <input type="text" id="name"/>
    <div><code>observable|async</code>:    
     `
})
export class CheckObs implements OnInit {

    ngOnInit() {
        function fromEvent(target, eventName) {
            return new Observable((observer) => {
                const handler = (e) => observer.next(e);
                // Add the event handler to the target
                target.addEventListener(eventName, handler);

                return () => {
                    // Detach the event handler from the target
                    target.removeEventListener(eventName, handler);
                };
            });
        }

        const ESC_KEY = 27;
        const nameInput = document.getElementById('name') as HTMLInputElement;

        const subscription = fromEvent(nameInput, 'keydown')
            .subscribe({
                next: (e: KeyboardEvent) => {
                    if (e.keyCode === ESC_KEY) {
                        nameInput.value = '';
                    }
                },
                complete: () => console.log("complete")
            });

        // const subscription1 = fromEvent(nameInput, 'keydown')
        //     .subscribe(function next(e: KeyboardEvent) {
        //         if (e.keyCode === ESC_KEY) {
        //             nameInput.value = '';
        //         }
        //         console.log("next")
        //     });

        function testCallBack(func) {
            console.log(func());
        }

        var func = function msg() { return 'hello' };

        // testCallBack({msg: () => 'hello'});
        testCallBack(func);
        testCallBack(() => 'hello');

        // const squareOdd = Observable.of(1, 2, 3, 4, 5)
        //     .pipe(
        //     filter(value => value % 2),
        //     map(value => value * value)
        //     )

        // const squareOdd2 = Observable.of(1, 2, 3, 4, 5)
        //     .filter((v, i) => v % 2 == 1)
        //     .map(v => v * v)


        // // Subscribe to get values
        // squareOdd2.subscribe(x => console.log(x));

        // var src = Observable.interval(1000);
        // let hot = src.publish();
        // var subscriber2;
        // var subscriber1 = hot.subscribe((value) => console.log("subscribe1 value =" + value));

        // setTimeout(() => {
        //     var that = this;
        //     hot.connect();
        //     setTimeout(() => {
        //         subscriber2 = hot.subscribe((value) => console.log("subscribe2 value =" + value));
        //     }, 2000)
        // }, 2000)

        // setTimeout(() => { subscriber1.unsubscribe(); subscriber2.unsubscribe(); }, 8000);


        let name = document.getElementById('name');

        // let inputData = Observable.fromEvent(name, 'keyup').map(char => 1).debounceTime(500).distinctUntilChanged().scan((a, b) => a + b);

        // inputData.subscribe(
        //     (value) => console.log("fromEvent =" + value),
        //     (error) => console.log(error));

        // var source = Observable.defer(function () {
        //     return Observable.of(42,34);
        // },);      

        var src1 = Observable.fromEvent(name, 'keyup').debounceTime(5000)
        var src2 = Observable.fromEvent(name, 'mousemove')
        // var src4 = Observable.time(9000,2000)

        // src1.subscribe((v) => console.log(v.value['key'] +" = " +v.interval))

        var src3 = Observable.zip(
            src2,src1
        )

        // src3.subscribe(
        //     (value) => console.log(value[0]['clientX'] + ' = ' +value[1]['key']),
        //     (error) => console.log(error));

        var obs = Observable.of(1,2,3,4,5,6)
        var subject = new Subject();
        subject.subscribe((v) => console.log("value subscribe1 subject =" +v))   
        setTimeout(() => {
            subject.subscribe((v) => console.log("value subscribe2 subject=" +v)) 
        },2000) 
        obs.subscribe(subject);
        subject.next(6);
        subject.next(7);   


        var subject2 = new BehaviorSubject(42);

var subscription_ = subject2.subscribe(
    function (x) {
        console.log('Next: ' + x.toString());
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    });

Observable.interval(1000).subscribe(subject2);
setTimeout(() => subject2.complete(), 3000)
}

}