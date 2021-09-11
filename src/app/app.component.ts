import { Component, OnInit } from '@angular/core';
import { GetComponentsService } from './shared/service/get-components.service';
import { ComponentHandle } from './shared/types/component.handle';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  components: Array<any> = [];

  constructor(private componentService: GetComponentsService) {}

  ngOnInit() {
    // Req to get components to render
    this.components = this.componentService.getComponents();
  }
}
