import {Directive, Input, OnInit, ElementRef, HostListener} from '@angular/core';

@Directive({
    selector: '[changeToImg]'
})
export class ChangeToImage implements OnInit{
    imgUrl : string;
    constructor(private eleRef: ElementRef){ }

    @Input()
        set changeToImg(url){
            if(url){
                this.eleRef.nativeElement.innerHTML = `<img src=${url} id='imgId'/>`;
                // console.log(this.viewRef.createEmbeddedView(this.tempRef));
                // this.viewRef.createEmbeddedView(this.tempRef);
            }
        }

    @HostListener('click') onClick(){
        this.eleRef.nativeElement.firstChild.style.border = "2px solid red";
    }    

    @HostListener('mouseover') onmouseover(){
        this.eleRef.nativeElement.firstChild.style.opacity = "0.5"
    }

    @HostListener('mouseout') onmouseout(){
         this.eleRef.nativeElement.firstChild.style.opacity = "1"
    }    

    ngOnInit(){
        // this.eleRef.nativeElement.innerHTML = `<h1>hello<\h1>`;
    }    

}