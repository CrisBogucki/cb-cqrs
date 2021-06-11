import {Injectable, QueryList} from '@angular/core';
import {IHandleCommand} from '../IHandleCommand';
import {ICommand} from '../ICommand';
import {BaseContainerIoC} from "../../base.container";

/*
* Better to use a ServiceBus aggregate
* */
@Injectable({providedIn: "root"})
export class CommandBus  {

  private handlersFactory: QueryList<IHandleCommand<ICommand>>;

  constructor(private ioc: BaseContainerIoC) {
    this.handlersFactory = ioc.handlersCommandFactory;
  }

  sendCommand(command: ICommand) {
    this.handlersFactory.forEach(x=> {
      if(typeof x == typeof command) {
        x.handle(command);
      }
    });
  }

}
