import {IEvent} from "cb-cqrs/lib/cqrs/Event/IEvent";

export class SampleEvent implements IEvent {
  body: string;
  constructor(body: string) {
    this.body = body
  }
}
