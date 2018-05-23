import { Component, OnInit, ViewChild, AfterViewChecked, AfterViewInit } from '@angular/core';
import { Ihero } from './Ihero';
import { SizerComponent } from './sizer.component';
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
    template: `
    
<h3>{{title}}</h3>    
<p>Reference Variable - {{sizerRef.testReferenceVar.name}}</p>
<p [style.fontSize.px]="fontSizePx">Hello</p>
<p [style.fontSize.em]="fontSizeEm">Hello 2</p>
<p>{{comment}}</p>

  <app-child [hero]="heroes"></app-child>
<sizer #sizerRef [(size)]="fontSizePx" [hero]="heroes" [sizeEm]="fontSizeEm" (fontSizeChange)="fontSizeEm = $event"></sizer>
`
})
export class InputOutputComponent implements OnInit, AfterViewChecked, AfterViewInit {
    title = 'Learning Input Output';
    fontSizePx;
    fontSizeEm;
    heroes;
    comment;
    @ViewChild(SizerComponent) viewChild: SizerComponent;


    constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        this.activatedRoute.paramMap
        .map((params: ParamMap) => {console.log(params); this.fontSizePx = params.get('fontSizePx'); this.fontSizeEm = params.get('fontSizeEm'); 
        this.heroes = params.get('heroData'); })
        .subscribe();
        console.log(this.activatedRoute.data);
    }

    ngAfterViewInit() {
        // viewChild is set after the view has been initialized
        // console.log('AfterViewInit');
        this.doSomething();
    }

    ngAfterViewChecked() {
        // viewChild is updated after the view has been checked
        if (this.fontSizePx === this.viewChild.size) {
            // console.log('AfterViewChecked (no change)');
        } else {
            this.fontSizePx = this.viewChild.size;
            // console.log('AfterViewChecked');
            this.doSomething();
        }
    }

    private doSomething() {
        let c = this.viewChild.size > 20 ? `That's a large font` : '';
        if (c !== this.comment) {
            setTimeout(() => this.comment = c, 0);
        }
    }

}
