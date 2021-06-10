import {Injectable} from "@angular/core";
import {BaseContainerIoC, IHandleCommand} from "cb-cqrs";
import {SampleCommand} from "./SampleCommand";

@Injectable({providedIn: 'root'})
export class SampleCommandHandler implements IHandleCommand<SampleCommand> {

  constructor(private ioc: BaseContainerIoC) {
    ioc.registerCommand(this);
  }

  Handle(command: SampleCommand) {
    console.log('===> Message from SampleCommandHandler', command.body);
  }
}
