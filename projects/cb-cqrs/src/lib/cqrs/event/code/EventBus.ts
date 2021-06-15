import {Injectable, QueryList} from "@angular/core";
import {IHandleEvent} from "../IHandleEvent";
import {IEvent} from "../IEvent";
import {BaseContainerIoC} from "../../base.container";

/*
* Better to use a ServiceBus aggregate
* */
@Injectable({providedIn: "root"})
export class EventBus {

  private handlersFactory: QueryList<IHandleEvent<IEvent>>;

  constructor(private ioc: BaseContainerIoC) {
    this.handlersFactory = ioc.handlersEventFactory;
  }

  sendEvent(event: IEvent) {
    let check;
    const handle = event.constructor.name
      this.handlersFactory.forEach(x=> {
        const handler = x.constructor.name.toLowerCase().split('handler')[0];
        if (handler === handle.toLowerCase()) {
          x.handle(event);
          check = event;
        }
      });

    if (check !== event) {
      console.error('===> Not found correct handler for ' + handle + '.\n' +
        'Is correct handler name is: ' + handle + 'Handler');
    }

  }

}
