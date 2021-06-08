import {Injectable, QueryList} from "@angular/core";
import {IEventBus} from "../IEventBus";
import {IHandleEvent} from "../IHandleEvent";
import {IEvent} from "../IEvent";
import {BaseContainerIoC} from "../../base.container";

@Injectable({providedIn: 'root'})
export class EventBus implements IEventBus {

  private handlersFactory: QueryList<IHandleEvent<IEvent>>;

  constructor(private ioc: BaseContainerIoC) {
    this.handlersFactory = ioc.handlersEventFactory;
  }

  SendEvent<T>(T: IEvent) {
      this.handlersFactory.forEach(x=> {
        if(typeof x == typeof T) {
          x.Handle(T);
        }
      });
  }

}
