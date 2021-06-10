import {IEvent} from "../../../../cb-cqrs/src/lib/cqrs/event/IEvent";

export class SampleEvent implements IEvent {
  body: string;
  constructor(body: string) {
    this.body = body
  }
}
