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

  async sendEvent(event: IEvent) {

    const handle = event.constructor.name

    return new Promise<void>((resolve) => {

      let check;

      this.handlersFactory.forEach(async x => {
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

      resolve();

    })
  }
}
