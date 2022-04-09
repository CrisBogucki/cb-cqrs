import {Injectable} from "@angular/core";
import {IHandleEvent} from "../../../../cb-cqrs/src/lib/cqrs/event";
import {BaseContainerIoC} from "../../../../cb-cqrs/src/lib/cqrs/base.container";
import {AddedItemEvent} from "./AddedItemEvent";


@Injectable({providedIn: 'root'})
export class AddedItemEventHandler implements IHandleEvent<AddedItemEvent> {

  constructor(private ioc: BaseContainerIoC) {
    ioc.registerEvent(this);
  }

  async handle(event: AddedItemEvent) {
    await this.test(event);
  }

  async test(event: AddedItemEvent) {
    return new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        console.log('===> Message from AddedItemEvent ' + event.message);
        clearInterval(interval);
        resolve();
      }, 3000);
    });
  }
}
