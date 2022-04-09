import {Injectable} from "@angular/core";
import {ICommand, CommandBus} from "./command";
import {IEvent, EventBus} from "./event";
import {IQuery, QueryBus} from "./query";

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

  public async sendCommand(T: ICommand) {
    await this._command.sendCommand(T);
  };

  public async query<T>(query: IQuery): Promise<T> {
    return await this._query.query<T>(query) as T;
  }

  public async sendEvent(event: IEvent) {
    return await this._event.sendEvent(event)
  }

}
