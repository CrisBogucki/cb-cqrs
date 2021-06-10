import {Injectable} from "@angular/core";
import {SampleQueryHandler} from "../Querys/SampleQueryHandler";

@Injectable({providedIn: 'root'})
export class QueryContainer {

  constructor(
    sampleQueryHandler:SampleQueryHandler
  ) {}

}
