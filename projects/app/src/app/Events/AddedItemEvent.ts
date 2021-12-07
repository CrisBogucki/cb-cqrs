import {IEvent} from "../../../../cb-cqrs/src/lib/cqrs/event/IEvent";

export class AddedItemEvent implements IEvent {

  message: string;

  constructor(message: string) {
    this.message = message;
  }
}
