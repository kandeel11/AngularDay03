import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocusContent]',
})
export class FocusContent {
  constructor(private elementRef: ElementRef) {}
@HostListener('mouseover') onMouseOver() {
  this.elementRef.nativeElement.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    this.elementRef.nativeElement.style.transform = 'translateY(-5px)';
    this.elementRef.nativeElement.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.08)';
    this.elementRef.nativeElement.style.zIndex = '1'; /* رفع العنصر فوق العناصر الأخرى */
  
  }
  @HostListener('mouseout') onMouseOut() {
    this.elementRef.nativeElement.style.transform = 'translateY(0)';
    this.elementRef.nativeElement.style.boxShadow = 'none';
  }
  @HostListener('click') onClick() {
    this.elementRef.nativeElement.style.transform = 'translateY(-10px)';
    this.elementRef.nativeElement.style.boxShadow = 'none';
  }
}
