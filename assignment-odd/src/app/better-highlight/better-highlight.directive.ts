import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @HostBinding('style.backgroundColor') backgroundColor: string = 'purple';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'purple');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'yellow');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
    this.backgroundColor = 'red';
  }

  @HostListener('mouseleave') mouseoout(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'purple');
    this.backgroundColor = 'purple';
  }

}
