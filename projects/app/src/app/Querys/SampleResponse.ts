import {IResponse} from "../../../../cb-cqrs/src/lib/cqrs/query/IResponse";

export class SampleResponse implements IResponse{

  body: string;

  constructor(body: string) {
    this.body = body
  }
}
