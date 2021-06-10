import {IQuery} from "cb-cqrs/lib/cqrs/Query/IQuery";

export class SampleQuery implements IQuery{

  body: string;

  constructor(body: string) {
    this.body = body
  }
}
