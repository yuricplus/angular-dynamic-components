import { Type } from '@angular/core';

export class ComponentHandle {
  constructor(public component: Type<any>, public data: any) {}
}