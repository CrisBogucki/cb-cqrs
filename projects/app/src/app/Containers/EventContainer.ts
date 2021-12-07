import {Injectable} from "@angular/core";
import {SampleEventHandler_WhenOnStart} from "../Events/SampleEventHandler_WhenOnStart";
import {SampleEventHandler_WhenOnPause} from "../Events/SampleEventHandler_WhenOnPause";
import {AddedItemEventHandler} from "../Events/AddedItemEventHandler";

@Injectable({providedIn: 'root'})
export class EventContainer {

  constructor(
    sampleEventHandler_WhenOnStart:SampleEventHandler_WhenOnStart,
    sampleEventHandler_WhenOnPause:SampleEventHandler_WhenOnPause,
    addedItemEventHandler:AddedItemEventHandler
              ) {}

}
