import {Injectable} from "@angular/core";
import {SampleCommandHandler} from "../Commands/SampleCommandHandler";
import {AddItemCommandHandler} from "../Commands/AddItemCommandHandler";

@Injectable({providedIn: 'root'})
export class CommandContainer {

  constructor(
    sampleCommandHandler:SampleCommandHandler,
    addItemCommandHandler: AddItemCommandHandler
  ) {}

}
