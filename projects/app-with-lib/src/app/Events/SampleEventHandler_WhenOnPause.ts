import {Injectable} from "@angular/core";
import {IHandleEvent} from "cb-cqrs/lib/cqrs/Event/IHandleEvent";
import {SampleEvent} from "./SampleEvent";
import {BaseContainerIoC} from "cb-cqrs/lib/cqrs/base.container";

@Injectable({providedIn: 'root'})
export class SampleEventHandler_WhenOnPause implements IHandleEvent<SampleEvent> {

  // constructor(private ioc: BaseContainerIoC) {
  //   ioc.registerEvent(this);
  // }

  Handle(event: SampleEvent) {
    console.log('===> Leci event z asd ' + (typeof this));
  }
}
