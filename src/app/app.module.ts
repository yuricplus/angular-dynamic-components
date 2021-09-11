import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenderComponentComponent } from './shared/components/render-component/render-component.component';
import { CardComponent } from './shared/components/card/card.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HostDirective } from './shared/directive/host.directive';
import { GetComponentsService } from './shared/service/get-components.service';

@NgModule({
  declarations: [
    AppComponent,
    RenderComponentComponent,
    CardComponent,
    HeaderComponent,
    HostDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    GetComponentsService
  ],
  entryComponents: [
    CardComponent,
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
