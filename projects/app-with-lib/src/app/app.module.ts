import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BaseContainerIoC, CbCqrsModule, CommandBus, EventBus, QueryBus} from "cb-cqrs";
import {CommandContainer} from "./Containers/CommandContainer";
import {QueryContainer} from "./Containers/QueryContainer";
import {EventContainer} from "./Containers/EventContainer";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CbCqrsModule
  ],
  providers: [BaseContainerIoC, CommandBus, QueryBus, EventBus],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(cIoC: CommandContainer, qIoC: QueryContainer, eIoC:EventContainer) {
  }
}
