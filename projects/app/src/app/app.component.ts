import {Component, OnInit} from '@angular/core';
import {SampleCommand} from "./Commands/SampleCommand";
import {SampleResponse} from "./Querys/SampleResponse";
import {SampleQuery} from "./Querys/SampleQuery";
import {ServiceBus} from "../../../cb-cqrs/src/lib/cqrs/service.bus";
import {AddItemCommand} from "./Commands/AddItemCommand";
import {Sample1Query} from "./Querys/Sample1Query";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'CQRS TEST APP';

  constructor(private serviceBus: ServiceBus) {}

  async ngOnInit(): Promise<void> {

    console.log('=====> Program Start');
    //await this.serviceBus.sendCommand(new SampleCommand("TEST OK 1"));
    //await this.serviceBus.sendCommand(new AddItemCommand("TEST OK 2"));


    let log = await this.serviceBus.query<SampleResponse>(new SampleQuery("TEST OK 1"));
    console.log(log.body)

    let log1 = await this.serviceBus.query<SampleResponse>(new Sample1Query("TEST OK 2"));
    console.log(log1.body)


    //await this.serviceBus.sendEvent(new AddedItemEvent("TEST OK"))
    //await this.serviceBus.sendEvent(new SampleEvent("TEST OK"))

    console.log('=====> Program End');

  }
}
