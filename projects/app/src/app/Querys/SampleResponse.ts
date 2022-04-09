import {IResponse} from "../../../../cb-cqrs/src/lib/cqrs/query";

export class SampleResponse implements IResponse{

  body: string;

  constructor(body: string) {
    this.body = body
  }
}
