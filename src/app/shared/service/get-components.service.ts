import { Injectable } from '@angular/core';

import { CardComponent } from '../components/card/card.component';
import { HeaderComponent } from '../components/header/header.component';
import { ComponentHandle } from '../types/component.handle';

@Injectable()
export class GetComponentsService {

  slices = [
    {
      name: 'card-component',
      component: CardComponent
    },
    {
      name: 'header-component',
      component: HeaderComponent
    }
  ]

  getComponentsAvaliables() {
    return this.slices;
  }

  getComponents() {
    return [
      {
        name: 'header-component',
        data: {
          title: 'Dinamic Header'
        }
      },
      {
        name: 'card-component',
        data : {
          title: 'Dinamic Card 1',
          description: 'Description 1'
        }
      },
      {
        name: 'card-component',
        data: {
          title: 'Dinamic Card 2',
          description: 'Description 2'
        }
      },
      {
        name: 'card-component',
        data : {
          title: 'Dinamic Card 3',
          description: 'Description 3'
        }
      },
      {
        name: 'card-component',
        data : {
          title: 'Dinamic Card 4',
          description: 'Description 4'
        }
      }
    ]
  }
}
