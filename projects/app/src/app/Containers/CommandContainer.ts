import {Injectable} from "@angular/core";
import {SampleCommandHandler} from "../Commands/SampleCommandHandler";

@Injectable({providedIn: 'root'})
export class CommandContainer {

  constructor(
    sampleCommandHandler:SampleCommandHandler
  ) {}

}
