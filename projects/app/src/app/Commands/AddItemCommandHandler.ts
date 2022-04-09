import {Injectable} from "@angular/core";
import {IHandleCommand} from "../../../../cb-cqrs/src/lib/cqrs/command";
import {BaseContainerIoC} from "../../../../cb-cqrs/src/lib/cqrs/base.container";
import {AddItemCommand} from "./AddItemCommand";
import {ServiceBus} from "../../../../cb-cqrs/src/lib/cqrs/service.bus";

@Injectable({providedIn: 'root'})
export class AddItemCommandHandler implements IHandleCommand<AddItemCommand> {

  constructor(private ioc: BaseContainerIoC, private serviceBus: ServiceBus) {
    ioc.registerCommand(this);
  }

  type: AddItemCommand;

  async handle(command: AddItemCommand) {
    await this.test(command)
  }

  async test(command: AddItemCommand) {
    return new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        console.log('===> Message from AddItemCommand ' + command.name);
        clearInterval(interval);
        resolve();
      }, 4000);
    });
  }

}
