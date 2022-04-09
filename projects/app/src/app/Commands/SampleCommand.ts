import {ICommand} from "../../../../cb-cqrs/src/lib/cqrs/command";

export class SampleCommand implements ICommand{

  body: string;

  constructor(body: string) {
    this.body = body
  }
}
