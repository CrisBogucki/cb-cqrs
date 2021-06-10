import {Injectable} from "@angular/core";
import {IHandleCommand} from "cb-cqrs/lib/cqrs/Command/IHandleCommand";
import {SampleCommand} from "./SampleCommand";
import {BaseContainerIoC} from "cb-cqrs/lib/cqrs/base.container";

@Injectable({providedIn: 'root'})
export class SampleCommandHandler implements IHandleCommand<SampleCommand> {

  constructor(private ioc: BaseContainerIoC) {
    ioc.registerCommand(this);
  }

  Handle(command: SampleCommand) {
    const msg = command.body;
    console.log('===> Wiadomosc z SampleCommandHandler', msg, command);
  }
}
