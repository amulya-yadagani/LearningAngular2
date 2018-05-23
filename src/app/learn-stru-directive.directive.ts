import { Directive, Input, ElementRef, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[learnStrDir]'
})
export class LearnStruDirective {

  constructor(private tempRef: TemplateRef<any>,private viewRef: ViewContainerRef) { }

  @Input() 
  set learnStrDir(condition: boolean){
    if(condition){
      this.viewRef.createEmbeddedView(this.tempRef);
      console.log(this.tempRef.elementRef.nativeElement);
      console.log(this.viewRef);
    }
  }
}
