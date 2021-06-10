import {IQuery} from "../../../../cb-cqrs/src/lib/cqrs/query/IQuery";

export class SampleQuery implements IQuery{

  body: string;

  constructor(body: string) {
    this.body = body
  }
}
