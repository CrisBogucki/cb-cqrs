import {IEvent} from "../../../../cb-cqrs/src/lib/cqrs/event";

export class SampleEvent implements IEvent {

  body: string;

  constructor(body: string) {
    this.body = body
  }

}
