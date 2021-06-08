import {Injectable, QueryList} from '@angular/core';
import {IHandleCommand} from '../IHandleCommand';
import {ICommand} from '../ICommand';
import {ICommandBus} from '../ICommandBus';
import {BaseContainerIoC} from "../../base.container";

@Injectable({providedIn: 'root'})
export class CommandBus implements ICommandBus {

  private handlersFactory: QueryList<IHandleCommand<ICommand>>;

  constructor(private ioc: BaseContainerIoC) {
    this.handlersFactory = ioc.handlersCommandFactory;
  }

  SendCommand<T>(T: ICommand) {
    this.handlersFactory.forEach(x=> {
      if(typeof x == typeof T) {
        x.Handle(T);
      }
    });
  }

}
