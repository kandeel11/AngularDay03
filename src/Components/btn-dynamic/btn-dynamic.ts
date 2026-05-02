import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-btn-dynamic',
  imports: [],
  templateUrl: './btn-dynamic.html',
  styleUrl: './btn-dynamic.css',
})
export class BtnDynamic {
 
  
  @Input() label = 'Button';
  @Input() buttonClass = 'btn btn-primary';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Input() color = '';
  @Input() width = '';
  @Input() height = '';

  @Output() buttonClick = new EventEmitter<void>();

  onClick(): void {
    this.buttonClick.emit();
  }
}
