import {Directive, Input, OnInit, ElementRef, HostListener, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[visiblityDir]'
})
export class VisibilityDir{
    condition = false;
    constructor(private tr: TemplateRef<any>, private vc: ViewContainerRef){

    }

    @Input() set visiblityDir(condition){
        if(condition){
            this.vc.createEmbeddedView(this.tr)
        } else {
            this.vc.clear();
        }
       console.log(this.tr.elementRef.nativeElement.style);
    }
}