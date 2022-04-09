import {Injectable} from "@angular/core";
import {SampleResponse} from "./SampleResponse";
import {IHandleQuery} from "../../../../cb-cqrs/src/lib/cqrs/query";
import {BaseContainerIoC} from "../../../../cb-cqrs/src/lib/cqrs/base.container";
import {Sample1Query} from "./Sample1Query";

@Injectable({providedIn: 'root'})
export class Sample1QueryHandler implements IHandleQuery<Sample1Query, SampleResponse> {

  constructor(private ioc: BaseContainerIoC) {
    ioc.registerQuery(this);
  }


  // @ts-ignore
  async handle(query: SampleQuery1): Promise<SampleResponse> {
    return await this.d(query);
  }

  async d(query: Sample1Query): Promise<SampleResponse> {
    return new Promise<SampleResponse>(resolve => {
      setInterval(() => {
        const w = new SampleResponse('===> Message from Sample1QueryHandler 2000 ' + query.body);
        resolve(w);
      }, 2000);
    });
  }

}
