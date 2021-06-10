import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BaseContainerIoC} from "./../../../cb-cqrs/src/lib/cqrs/base.container";
import {CommandBus} from "./../../../cb-cqrs/src/lib/cqrs/command/Code/CommandBus";
import {QueryBus} from "./../../../cb-cqrs/src/lib/cqrs/query/Code/QueryBus";
import {EventBus} from "./../../../cb-cqrs/src/lib/cqrs/event/Code/EventBus";
import {CommandContainer} from "./Containers/CommandContainer";
import {QueryContainer} from "./Containers/QueryContainer";
import {EventContainer} from "./Containers/EventContainer";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BaseContainerIoC, CommandBus, QueryBus, EventBus],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(a: CommandContainer, b: QueryContainer, c: EventContainer) {
  }
}
