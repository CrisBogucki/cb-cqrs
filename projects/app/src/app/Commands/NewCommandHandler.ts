import {Injectable} from "@angular/core";
import {IHandleCommand} from "../../../../cb-cqrs/src/lib/cqrs/command";
import {NewCommand} from "./NewCommand";

@Injectable({providedIn: 'root'})
export class NewCommandHandler implements IHandleCommand<NewCommand> {

  handle(command: NewCommand) {

  }

}
