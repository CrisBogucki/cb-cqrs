import {Injectable} from "@angular/core";
import {SampleCommand} from "./SampleCommand";
import {IHandleCommand} from "../../../../cb-cqrs/src/lib/cqrs/command/IHandleCommand";
import {BaseContainerIoC} from "../../../../cb-cqrs/src/lib/cqrs/base.container";
import {AddItemCommand} from "./AddItemCommand";
import {ServiceBus} from "../../../../cb-cqrs/src/lib/cqrs/ServiceBus";
import {SampleEvent} from "../Events/SampleEvent";
import {AddedItemEvent} from "../Events/AddedItemEvent";

@Injectable({providedIn: 'root'})
export class AddItemCommandHandler implements IHandleCommand<AddItemCommand> {

  constructor(private ioc: BaseContainerIoC, private serviceBus: ServiceBus ) {
    ioc.registerCommand(this);
  }

  type: AddItemCommand;

  handle(command: AddItemCommand) {
    console.log("Item added");
    this.serviceBus.sendEvent(new AddedItemEvent(" good message"))
  }

}
