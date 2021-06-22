import {Injectable, Query, QueryList} from "@angular/core";
import {IHandleQuery} from "../IHandleQuery";
import {IQuery} from "../IQuery";
import {IResponse} from "../IResponse";
import {BaseContainerIoC} from "../../base.container";

/*
* Better to use a ServiceBus aggregate
* */
@Injectable({providedIn: "root"})
export class QueryBus {

  private handlersFactory: QueryList<IHandleQuery<IQuery, IResponse>>;

  constructor(private ioc: BaseContainerIoC) {
    this.handlersFactory = ioc.handlersQueryFactory;
  }

  query<T>(query: IQuery): T {
    let result: IResponse;
    const handle = query.constructor.name
    const check = this.handlersFactory.find((x)=>{
      const handler = x.constructor.name.toLowerCase().split('handler')[0];
      if (handler === handle.toLowerCase()) {
        result = x.handle(query) as T;
        return true;
      }
      return false;
    });

    if (!check) {
      console.error('===> Not found correct handler for ' + handle + '.\n' +
        'Is correct handler name is: ' + handle + 'Handler');
    }

    return result as T;
  }

}
