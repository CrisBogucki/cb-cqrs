import {Injectable, QueryList} from '@angular/core';
import {IHandleCommand} from '../IHandleCommand';
import {ICommand} from '../ICommand';
import {BaseContainerIoC} from "../../base.container";
import {IQuery} from "../../query/IQuery";
import {IResponse} from "../../query/IResponse";

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
    let check;
    const handle = command.constructor.name
    this.handlersFactory.forEach(x=> {
      const handler = x.constructor.name.toLowerCase().split('handler')[0];
      if (handler === handle.toLowerCase()) {
        x.handle(command);
        check = command
      }
    });

    if (check !== command) {
      console.error('===> Not found correct handler for ' + handle + '.\n' +
        'Is correct handler name is: ' + handle + 'Handler');
    }

  }

}
