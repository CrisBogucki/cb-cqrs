import {Injectable, QueryList} from '@angular/core';
import {IHandleCommand} from '../IHandleCommand';
import {ICommand} from '../ICommand';
import {BaseContainerIoC} from "../../base.container";

@Injectable()
export class CommandBus  {

  private handlersFactory: QueryList<IHandleCommand<ICommand>>;

  constructor(private ioc: BaseContainerIoC) {
    this.handlersFactory = ioc.handlersCommandFactory;
  }

  SendCommand(T: ICommand) {
    this.handlersFactory.forEach(x=> {
      if(typeof x == typeof T) {
        x.Handle(T);
      }
    });
  }

}
