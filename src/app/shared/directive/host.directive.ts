import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[hostComponent]'}
)

export class  HostDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}