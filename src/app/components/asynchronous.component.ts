import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/publish';

let $ = null;
@Component({
    selector: "async-prgm",
    template: `<p>Async prgmng</p><p>{{symbols | json}}</p> 
    <button id="clickCheck">Count Click</button>`
})
export class AsynchronousPrgmg implements OnInit {

    constructor() {
        $ = window["jQuery"]
    }
    getStockSymbols(stocks) {
        let symbols = [];
        stocks.forEach((stock) => { symbols.push(stock.symbol) });
        return symbols;
    }

    symbols = this.getStockSymbols([
        { symbol: 'AAA', price: 200, vol: 500 },
        { symbol: 'BBB', price: 400, vol: 700 },
        { symbol: 'CCC', price: 600, vol: 200 }
    ]);



    // Observable.fromEvent($('#clickCheck'),click);

    ngOnInit() {
        let clickStream = Observable.fromEvent(document.querySelector('#clickCheck'), 'click');
        clickStream.subscribe(
            value => { console.log(value); }
        );
        // var source = Observable.interval(1000);

        // var subscription1 = source.subscribe(
        //     x => console.log('Observer 1: onNext: ' + x),
        //     e => console.log('Observer 1: onError: ' + e.message),
        //     () => console.log('Observer 1: onCompleted'));

        // var subscription2 = source.subscribe(
        //     x => console.log('Observer 2: onNext: ' + x),
        //     e => console.log('Observer 2: onError: ' + e.message),
        //     () => console.log('Observer 2: onCompleted'));

        // setTimeout(() => {
        //     subscription1.unsubscribe();
        //     subscription2.unsubscribe();
        // }, 5000);

        var source = Observable.interval(1000);

// Convert the sequence into a hot sequence
var hot = source.publish();

// No value is pushed to 1st subscription at this point
var subscription1 = hot.subscribe(
  x => console.log('Observer 1: onNext: %s', x),
  e => console.log('Observer 1: onError: %s', e),
  () => console.log('Observer 1: onCompleted'));

console.log('Current Time after 1st subscription: ' + Date.now());

// Idle for 3 seconds
setTimeout(() => {

  // Hot is connected to source and starts pushing value to subscribers
//   hot.connect();

  console.log('Current Time after connect: ' + Date.now());

  // Idle for another 3 seconds
  setTimeout(() => {

    console.log('Current Time after 2nd subscription: ' + Date.now());

    var subscription2 = hot.subscribe(
      x => console.log('Observer 2: onNext: %s', x),
      e => console.log('Observer 2: onError: %s', e),
      () => console.log('Observer 2: onCompleted'));

  }, 3000);
}, 3000);

    }

}