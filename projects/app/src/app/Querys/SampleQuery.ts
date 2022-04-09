import {IQuery} from "../../../../cb-cqrs/src/lib/cqrs/query";

export class SampleQuery implements IQuery{

  body: string;

  constructor(body: string) {
    this.body = body
  }
}
