import {ICommand} from "cb-cqrs";

export class SampleCommand implements ICommand{
  body: string;
  constructor(body: string) {
    this.body = body
  }
}
