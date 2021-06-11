import {Injectable} from "@angular/core";
import {CommandBus} from "./command/code/CommandBus";
import {QueryBus} from "./query/code/QueryBus";
import {EventBus} from "./event/code/EventBus";
import {ICommand} from "./command/ICommand";
import {IQuery} from "./query/IQuery";
import {IEvent} from "./event/IEvent";

@Injectable({providedIn: "root"})
export class ServiceBus  {

  private readonly _command: CommandBus;
  private readonly _query: QueryBus;
  private readonly _event: EventBus

  constructor(commandBus: CommandBus, queryBus: QueryBus, eventBus: EventBus) {
    this._command = commandBus;
    this._query = queryBus;
    this._event = eventBus;
  }

  public sendCommand(T: ICommand) :void {
    this._command.sendCommand(T);
  };

  public query<T>(query: IQuery): T {
    return this._query.query<T>(query) as T;
  }

  public sendEvent(event: IEvent): void {
    return this._event.sendEvent(event)
  }

}
