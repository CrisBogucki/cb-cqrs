import {Injectable} from "@angular/core";
import {SampleQueryHandler} from "../Querys/SampleQueryHandler";
import {Sample1QueryHandler} from "../Querys/Sample1QueryHandler";

@Injectable({providedIn: 'root'})
export class QueryContainer {

  constructor(
    sampleQueryHandler:SampleQueryHandler,
    sample1QueryHandler: Sample1QueryHandler
  ) {}

}
