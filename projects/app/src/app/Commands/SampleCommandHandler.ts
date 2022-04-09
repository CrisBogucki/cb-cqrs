import {Injectable} from "@angular/core";
import {SampleCommand} from "./SampleCommand";
import {IHandleCommand} from "../../../../cb-cqrs/src/lib/cqrs/command";
import {BaseContainerIoC} from "../../../../cb-cqrs/src/lib/cqrs/base.container";

@Injectable({providedIn: 'root'})
export class SampleCommandHandler implements IHandleCommand<SampleCommand> {

  constructor(private ioc: BaseContainerIoC) {
    ioc.registerCommand(this);
  }

  type: SampleCommand;

  async handle(command: SampleCommand) {
    await this.test(command);
  }

  async test(command: SampleCommand) {
    return new Promise<void>((resolve) => {
      const interval = setInterval(() => {
        console.log('===> Message from SampleCommand ' + command.body);
        clearInterval(interval);
        resolve();
      }, 2000);
    });
  }

}
