import { AfterViewInit, Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: 'mat-card[appMatCardScrollable]'
})
export class ScrollableMatCardDirective implements AfterViewInit {

  @HostBinding('style.display') display = 'flex';
  @HostBinding('style.flex-direction') flexDirection = 'column';
  @HostBinding('style.overflow') overflow = 'hidden';

  constructor(private elementRef: ElementRef<HTMLElement>, private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    const children = this.elementRef.nativeElement.children;

    for (let i = 0; i < children.length; i++) {
      const child: Element = children.item(i);

      if (child.tagName === 'MAT-CARD-HEADER') {
        this.renderer.setStyle(child, 'display', 'block');
      } else if (child.tagName === 'MAT-CARD-CONTENT') {
        this.renderer.setStyle(child, 'overflow-y', 'auto');
      }
    }
  }

}
