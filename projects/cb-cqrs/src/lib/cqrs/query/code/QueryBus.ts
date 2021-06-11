import {Injectable, QueryList} from "@angular/core";
import {IHandleQuery} from "../IHandleQuery";
import {IQuery} from "../IQuery";
import {IResponse} from "../IResponse";
import {BaseContainerIoC} from "../../base.container";

/*
* Better to use a ServiceBus aggregate
* */
@Injectable({providedIn: "root"})
export class QueryBus {

  private handlersFactory: QueryList<IHandleQuery<IQuery,IResponse>>;

  constructor(private ioc: BaseContainerIoC) {
    this.handlersFactory = ioc.handlersQueryFactory;
  }

  query<T>(query: IQuery): T {
    let result: IResponse;
    this.handlersFactory.forEach(x=> {
      if(typeof x == typeof query) {
        result = x.handle(query);
      }
    });
    return result as T;
  }

}
