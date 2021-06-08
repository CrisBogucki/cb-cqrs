import {IEvent} from "./IEvent";

export interface IEventBus {
  SendEvent<T>(T: IEvent);
}
