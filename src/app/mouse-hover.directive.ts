import { Directive, ElementRef, Renderer2, HostListener, Host } from '@angular/core';

@Directive({
  selector: '[appMouseHover]'
})
export class MouseHoverDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
   }

    @HostListener('mouseenter') onMouseEnter() {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'aqua');
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'white');
    }
}
