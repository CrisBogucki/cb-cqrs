import {Injectable, QueryList} from '@angular/core';
import {IHandleCommand} from '../IHandleCommand';
import {ICommand} from '../ICommand';
import {BaseContainerIoC} from "../../base.container";


@Injectable({providedIn: "root"})
export class CommandBus {

  private handlersFactory: QueryList<IHandleCommand<ICommand>>;

  constructor(private ioc: BaseContainerIoC) {
    this.handlersFactory = ioc.handlersCommandFactory;
  }

  async sendCommand(command: ICommand): Promise<any> {
    return new Promise<void>((resolve, reject) => {
      const handle = command.constructor.name;
      const check = this.handlersFactory.find((x) => {
        const handler = x.constructor.name.toLowerCase().split('handler')[0];
        if (handler === handle.toLowerCase()) {
          new Promise(async () => {
            await x.handle(command);
            resolve();
          });
          return true;
        }
        return false;
      });

      if (!check) {
        console.error('===> Not found correct handler for ' + handle + '.\n' +
          'Is correct handler name is: ' + handle + 'Handler');
        reject();
      }

    });
  }

}
