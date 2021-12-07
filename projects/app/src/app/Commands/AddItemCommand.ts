import {ICommand} from "../../../../cb-cqrs/src/lib/cqrs/command/ICommand";

export class AddItemCommand implements ICommand{

  name: string;

  constructor(name: string) {
    this.name = name
  }
}
