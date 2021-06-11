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
      this.handlersFactory.forEach(x=> {
        if(typeof x == typeof event) {
          x.handle(event);
        }
      });
  }

}
