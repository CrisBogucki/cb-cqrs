import {Injectable} from "@angular/core";
import {SampleCommand} from "./SampleCommand";
import {IHandleCommand} from "../../../../cb-cqrs/src/lib/cqrs/command/IHandleCommand";
import {BaseContainerIoC} from "../../../../cb-cqrs/src/lib/cqrs/base.container";

@Injectable({providedIn: 'root'})
export class SampleCommandHandler implements IHandleCommand<SampleCommand> {

  constructor(private ioc: BaseContainerIoC) {
    ioc.registerCommand(this);
  }

  handle(command: SampleCommand) {
    console.log('===> Message from SampleCommandHandler', command.body);
  }
}
