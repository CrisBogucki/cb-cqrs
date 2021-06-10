import {IResponse} from "cb-cqrs/lib/cqrs/Query/IResponse";

export class SampleResponse implements IResponse{

  body: string;

  constructor(body: string) {
    this.body = body
  }
}
