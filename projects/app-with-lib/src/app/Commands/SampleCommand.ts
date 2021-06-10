import {ICommand} from "cb-cqrs/lib/cqrs/Command/ICommand";

export class SampleCommand implements ICommand{

  body: string;

  constructor(body: string) {
    this.body = body
  }
}
