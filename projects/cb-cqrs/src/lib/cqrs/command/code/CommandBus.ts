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
    const handle = command.constructor.name
    const check = this.handlersFactory.find((x)=>{
      const handler = x.constructor.name.toLowerCase().split('handler')[0];
      if (handler === handle.toLowerCase()) {
        x.handle(command);
        return true;
      }
      return false;
    });

    if (!check) {
      console.error('===> Not found correct handler for ' + handle + '.\n' +
        'Is correct handler name is: ' + handle + 'Handler');
    }

  }

}
