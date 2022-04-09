import {Injectable, QueryList} from "@angular/core";
import {ICommand, IHandleCommand} from "./command";
import {IEvent, IHandleEvent} from "./event";
import {IQuery, IResponse, IHandleQuery} from "./query";

@Injectable({providedIn: "root"})
export class BaseContainerIoC {

  handlersCommandFactory: QueryList<IHandleCommand<ICommand>>;
  handlersQueryFactory: QueryList<IHandleQuery<IQuery, IResponse>>;
  handlersEventFactory: QueryList<IHandleEvent<IEvent>>;

  constructor() {
    this.handlersCommandFactory = new QueryList<IHandleCommand<ICommand>>();
    this.handlersQueryFactory = new QueryList<IHandleQuery<IQuery, IResponse>>();
    this.handlersEventFactory = new QueryList<IHandleEvent<IEvent>>();
  }


  registerCommand(handler: IHandleCommand<ICommand>) {
    this.handlersCommandFactory.reset([...this.handlersCommandFactory.toArray(), handler]);
  }

  registerQuery(handler: IHandleQuery<IQuery, IResponse>) {
    this.handlersQueryFactory.reset([...this.handlersQueryFactory.toArray(), handler]);
  }

  registerEvent(handler: IHandleEvent<IEvent>) {
    this.handlersEventFactory.reset([...this.handlersEventFactory.toArray(), handler]);
  }

}
