import {IQuery} from "./IQuery";
import {IResponse} from "./IResponse";

export interface IQueryBus {
  Query<T>(T: IQuery): IResponse;
}
