import {Injectable} from "@angular/core";
import {SampleEvent} from "./SampleEvent";
import {IHandleEvent} from "../../../../cb-cqrs/src/lib/cqrs/event";
import {BaseContainerIoC} from "../../../../cb-cqrs/src/lib/cqrs/base.container";
import {AddedItemEvent} from "./AddedItemEvent";


@Injectable({providedIn: 'root'})
export class SampleEventHandler_WhenOnPause implements IHandleEvent<SampleEvent> {

  constructor(private ioc: BaseContainerIoC) {
    ioc.registerEvent(this);
  }

  async handle(event: SampleEvent) {
    await this.test(event);
  }

  async test(event: SampleEvent) {
    return new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        console.log('===> Message from SampleEventHandler_WhenOnPause ' + event.body);
        clearInterval(interval);
        resolve();
      }, 2000);
    });
  }
}
