import { AfterViewInit, Directive, ElementRef, OnDestroy } from '@angular/core';

@Directive({
  selector: '[applyTabIndexes]'
})
export class NgxDynamicTabindexDirective implements AfterViewInit, OnDestroy {
  private mutationObserver: MutationObserver;
  private attributeName = 'tabindex';

  constructor(private hostEl: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.applyIndexes();
    this.mutationObserver = new MutationObserver(() => this.applyIndexes());
    this.mutationObserver.observe(this.hostEl.nativeElement, {
      childList: true,
      subtree: true,
    });
  }

  ngOnDestroy(): void {
    this.mutationObserver.disconnect();
  }

  private applyIndexes(): void {
    const isTabAheadOffset = !!this.hostEl.nativeElement.querySelector('[tabIndexAheadOffset]');
    const elements = this.hostEl.nativeElement.querySelectorAll(`[${this.attributeName}]`);
    let globalOffset: number;
    let tabIndex: string;

    elements.forEach((el, index) => {
      if (isTabAheadOffset) {
        const offsetValue = parseInt(el.getAttribute('tabIndexAheadOffset'), 10);
        if (offsetValue) {
          globalOffset = offsetValue;
          tabIndex = this.getTabIndex(index + offsetValue + 1);
        } else if (globalOffset >= 1) {
          tabIndex = this.getTabIndex(index);
          globalOffset--;
        } else {
          tabIndex = this.getTabIndex(index + 1);
        }
      } else {
        tabIndex = this.getTabIndex(index + 1);
      }

      el.setAttribute(this.attributeName, tabIndex);
    });
  }

  private getTabIndex(index: number): string {
    return index.toString();
  }

}
