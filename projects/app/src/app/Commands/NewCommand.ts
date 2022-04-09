import {ICommand} from "../../../../cb-cqrs/src/lib/cqrs/command";

export class NewCommand implements ICommand{

  name: string;

  constructor(name: string) {
    this.name = name
  }
}
