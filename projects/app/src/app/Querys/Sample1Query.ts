import {IQuery} from "../../../../cb-cqrs/src/lib/cqrs/query";

export class Sample1Query implements IQuery{

  body: string;

  constructor(body: string) {
    this.body = body
  }
}
