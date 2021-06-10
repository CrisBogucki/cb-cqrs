import {Injectable, QueryList} from "@angular/core";
import {IHandleEvent} from "../IHandleEvent";
import {IEvent} from "../IEvent";
import {BaseContainerIoC} from "../../base.container";

@Injectable({providedIn: "root"})
export class EventBus {

  private handlersFactory: QueryList<IHandleEvent<IEvent>>;

  constructor(private ioc: BaseContainerIoC) {
    this.handlersFactory = ioc.handlersEventFactory;
  }

  SendEvent(T: IEvent) {
      this.handlersFactory.forEach(x=> {
        if(typeof x == typeof T) {
          x.Handle(T);
        }
      });
  }

}
