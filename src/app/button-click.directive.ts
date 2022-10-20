import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonClick]'
})
export class ButtonClickDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick() {
    this.renderer.setStyle(this.el.nativeElement, "background-color", "red");
  }
}
