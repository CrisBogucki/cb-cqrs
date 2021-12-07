import {Injectable} from "@angular/core";
import {SampleEvent} from "./SampleEvent";
import {IHandleEvent} from "../../../../cb-cqrs/src/lib/cqrs/event/IHandleEvent";
import {BaseContainerIoC} from "../../../../cb-cqrs/src/lib/cqrs/base.container";
import {AddedItemEvent} from "./AddedItemEvent";



@Injectable({providedIn: 'root'})
export class AddedItemEventHandler implements IHandleEvent<AddedItemEvent> {

  constructor(private ioc: BaseContainerIoC) {
    ioc.registerEvent(this);
  }

  handle(event: AddedItemEvent) {
    console.log(`===> Hello world we have a good message -> ${event.message}`);
  }
}
