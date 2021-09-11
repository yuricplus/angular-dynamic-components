import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild } from '@angular/core';

import { HostDirective } from '../../directive/host.directive';
import { ComponentHandle } from '../../types/component.handle'
import { IComponentData } from '../../interface/IComponentData';
import { GetComponentsService } from '../../service/get-components.service';


@Component({
  selector: 'app-render-component',
  templateUrl: './render-component.component.html',
  styleUrls: ['./render-component.component.scss']
})
export class RenderComponentComponent implements OnInit {

  @Input() ads: Array<any> = [];

  @ViewChild(HostDirective, {static: true}) hostComponent!: HostDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    public serviceComponent: GetComponentsService
  ) { }

  ngOnInit(): void {
    this.loadComponent(); 
  }

  loadComponent() {
    const componentsAvaliables = this.serviceComponent.getComponentsAvaliables();

    this.ads.forEach(item => {
      let componentSelected = componentsAvaliables.filter(component => component.name === item.name)[0];
      if(componentSelected) {
        let componentRender = new ComponentHandle(componentSelected.component, item.data);

        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentRender.component);
        
        let viewContainerRef = this.hostComponent.viewContainerRef;

        let componentRef = viewContainerRef.createComponent<IComponentData>(componentFactory);
        componentRef.instance.data = componentRender.data;
      }
    })
  }

}
