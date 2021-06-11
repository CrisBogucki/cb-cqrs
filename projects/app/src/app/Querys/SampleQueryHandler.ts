import {Injectable} from "@angular/core";
import {SampleQuery} from "./SampleQuery";
import {SampleResponse} from "./SampleResponse";
import {IHandleQuery} from "../../../../cb-cqrs/src/lib/cqrs/query/IHandleQuery";
import {BaseContainerIoC} from "../../../../cb-cqrs/src/lib/cqrs/base.container";

@Injectable({providedIn: 'root'})
export class SampleQueryHandler implements IHandleQuery<SampleQuery, SampleResponse> {

  constructor(private ioc: BaseContainerIoC) {
    ioc.registerQuery(this);
  }

  handle(query: SampleQuery): SampleResponse {
    let result = new SampleResponse('===> Message from SampleQueryHandler ' + query.body);
    return result;
  }

}
