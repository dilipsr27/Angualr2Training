import { Directive, ElementRef, Input, OnInit, Renderer } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @Input('highlight') public myColorName:string //@Input() public highlight:string - if variable name and att name is different then we have to explicitly pass the attr name inside @input()
  constructor(private el:ElementRef, private renderer:Renderer) { // Dependency Injection - private el becomes a member variable
     
   }

   ngOnInit(){
     // this.el.nativeElement.style.backgroundColor=this.myColorName;
     this.renderer.setElementStyle(this.el.nativeElement,"backgroundColor",this.myColorName);
   }
   
}
