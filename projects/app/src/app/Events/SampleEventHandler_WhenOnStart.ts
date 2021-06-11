import {Injectable} from "@angular/core";
import {SampleEvent} from "./SampleEvent";
import {IHandleEvent} from "../../../../cb-cqrs/src/lib/cqrs/event/IHandleEvent";
import {BaseContainerIoC} from "../../../../cb-cqrs/src/lib/cqrs/base.container";


@Injectable({providedIn: 'root'})
export class SampleEventHandler_WhenOnStart implements IHandleEvent<SampleEvent> {

  constructor(private ioc: BaseContainerIoC) {
    ioc.registerEvent(this);
  }

  handle(event: SampleEvent) {
    console.log('===> Message from SampleEventHandler_WhenOnStart ' + event.body);
  }
}
