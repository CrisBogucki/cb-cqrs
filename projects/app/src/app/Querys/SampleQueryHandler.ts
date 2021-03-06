import {Injectable} from "@angular/core";
import {SampleQuery} from "./SampleQuery";
import {SampleResponse} from "./SampleResponse";
import {IHandleQuery} from "../../../../cb-cqrs/src/lib/cqrs/query";
import {BaseContainerIoC} from "../../../../cb-cqrs/src/lib/cqrs/base.container";

@Injectable({providedIn: 'root'})
export class SampleQueryHandler implements IHandleQuery<SampleQuery, SampleResponse> {

  constructor(private ioc: BaseContainerIoC) {
    ioc.registerQuery(this);
  }

  // @ts-ignore
  async handle(query: SampleQuery): Promise<SampleResponse> {
    return await this.d(query);
  }

  async d(query: SampleQuery): Promise<SampleResponse> {
    return new Promise<SampleResponse>(resolve => {
      setInterval(() => {
        const w = new SampleResponse('===> Message from SampleQueryHandler 4000 ' + query.body);
        resolve(w);
      }, 4000);
    });
  }

}
