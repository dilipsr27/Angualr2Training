import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) { // Dependency Injection - private el becomes a member variable
      this.doSomething();
   }

   doSomething(){
      this.el.nativeElement.style.backgroundColor="yellow";
   }

}
