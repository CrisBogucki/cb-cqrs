import {ICommand} from './ICommand';

export interface ICommandBus {
  SendCommand<T>(T: ICommand);
}
