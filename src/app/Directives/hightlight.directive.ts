import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHightlight]' // tên để gọi
})
export class HightlightDirective {
  @Input('appHightlight') appHightlight='blue';

  constructor(private el : ElementRef) { // chạy vô đây
    // console.log('hight light');
    // el.nativeElement.style.color = this.appHightlight// chir chayj 1 laanf 
   }
   ngOnInit():void{
    console.log('hight light');
    this.el.nativeElement.style.color = this.appHightlight// chir chayj 1 laanf 
   }
}
