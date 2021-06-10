import {Injectable} from "@angular/core";
import {SampleEvent} from "./SampleEvent";
import {IHandleEvent} from "../../../../cb-cqrs/src/lib/cqrs/event/IHandleEvent";
import {BaseContainerIoC} from "../../../../cb-cqrs/src/lib/cqrs/base.container";


@Injectable({providedIn: 'root'})
export class SampleEventHandler_WhenOnStart implements IHandleEvent<SampleEvent> {

  constructor(private ioc: BaseContainerIoC) {
    ioc.registerEvent(this);
  }

  Handle(event: SampleEvent) {
    console.log('===> Leci event z asd sad ' + (typeof this).toString());
  }
}
