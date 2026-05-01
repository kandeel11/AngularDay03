import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appThemeChange]',
})
export class ThemeChange {
  constructor() {}
  @HostListener('click') onClick() {
    const htmlTag = document.documentElement;
    const currentTheme = htmlTag.getAttribute('data-bs-theme') || 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlTag.setAttribute('data-bs-theme', newTheme);
    htmlTag.setAttribute('data-theme', newTheme);
  }
}
