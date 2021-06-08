import {NgModule} from '@angular/core';
import {BaseContainerIoC} from "./cqrs/base.container";
import {CommandBus} from "./cqrs/command/Code/CommandBus";
import {QueryBus} from "./cqrs/query/Code/QueryBus";
import {EventBus} from "./cqrs/event/Code/EventBus";

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: [
    BaseContainerIoC,
    {provide: 'CommandBus', useClass: CommandBus},
    {provide: 'QueryBus', useClass: QueryBus},
    {provide: 'EventBus', useClass: EventBus},
  ]
})
export class CbCqrsModule {
}
