import {Injectable} from "@angular/core";
import {IHandleQuery} from "cb-cqrs/lib/cqrs/Query/IHandleQuery";
import {SampleQuery} from "./SampleQuery";
import {SampleResponse} from "./SampleResponse";
import {BaseContainerIoC} from "cb-cqrs/lib/cqrs/base.container";

@Injectable({providedIn: 'root'})
export class SampleQueryHandler implements IHandleQuery<SampleQuery, SampleResponse> {

  // constructor(private ioc: BaseContainerIoC) {
  //   ioc.registerQuery(this);
  // }

  Handle(query: SampleQuery): SampleResponse {
    let result = new SampleResponse(query.body + " wynik operacji");
    return result;
  }

}
