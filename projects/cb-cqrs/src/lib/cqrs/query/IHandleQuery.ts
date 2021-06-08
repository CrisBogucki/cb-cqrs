
import {IResponse} from "./IResponse";

export interface IHandleQuery<T,R> {
  Handle(query: T) : R;
}
