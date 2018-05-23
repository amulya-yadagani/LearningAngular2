import { Component, Input, Output, EventEmitter, OnInit, OnChanges, DoCheck, SimpleChanges } from '@angular/core';

@Component({
    selector: "sizer",
    template: `<button (click)="inc()">Enlarge font</button>
    <button (click)="dec()">Reduce font</button>
    <p>{{hero | json}}</p>`
})
export class SizerComponent implements OnInit, OnChanges, DoCheck {
    testReferenceVar = {"name":"Amulya"};
    @Input() size;
    @Input() sizeEm;
    @Input() hero;
    @Output() sizeChange = new EventEmitter<number>();
    @Output() fontSizeChange = new EventEmitter<number>();
    inc() {
        this.size += 10;
        this.sizeEm += 1;
        this.sizeChange.emit(this.size);
        this.fontSizeChange.emit(this.sizeEm);
    }

    dec() {
        this.size -= 10;
        this.sizeEm -= 1;
        this.sizeChange.emit(this.size);
        this.fontSizeChange.emit(this.sizeEm);
    }

    ngOnInit() {
        // console.log("SizerComponent ngOnInit: Initialized")
    }

    ngDoCheck() {
        // console.log("SizerComponent ngDoCheck: triggers after ngOnInit and for every ngOnChange")
    }

    ngOnChanges(changes: SimpleChanges) {
        // console.log("SizerComponent ngOnChanges: input properties are bound")
        // console.log(changes)
    }
}