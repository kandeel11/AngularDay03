import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appScaleImage]',
})
export class ScaleImage {
  constructor(private elementRef: ElementRef) {}
  @HostListener('click') onClick() {
    this.elementRef.nativeElement.style.transform = 'scale(1.1)';
  }
  @HostListener('mouseover') onMouseOver() {
    this.elementRef.nativeElement.style.transition = 'transform 0.3s ease';
    this.elementRef.nativeElement.style.transform = 'scale(1.05)';
  }
  @HostListener('mouseout') onMouseOut() {
    this.elementRef.nativeElement.style.transform = 'scale(1)';
  }
}
