import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {CommandContainer} from "./Containers/CommandContainer";
import {QueryContainer} from "./Containers/QueryContainer";
import {EventContainer} from "./Containers/EventContainer";
import {CbCqrsModule} from "../../../cb-cqrs/src/lib/cb-cqrs.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CbCqrsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(a: CommandContainer, b: QueryContainer, c: EventContainer) {
  }
}
