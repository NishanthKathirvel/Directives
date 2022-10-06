import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {
  constructor(private ele: ElementRef) { }

  @Input() appHighlights = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlights);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.ele.nativeElement.style.backgroundColor = color;
  }

}
