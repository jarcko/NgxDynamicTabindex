import { NgxDynamicTabindexDirective } from './ngx-dynamic-tabindex.directive';
import { ElementRef } from '@angular/core';

describe('NgxDynamicTabindexDirective', () => {
  let hostElementStub: ElementRef;

  beforeEach(() => {
    hostElementStub = {
      nativeElement: {}
    };
  });

  it('should create an instance', () => {
    const directive = new NgxDynamicTabindexDirective(hostElementStub);
    expect(directive).toBeTruthy();
  });
});
