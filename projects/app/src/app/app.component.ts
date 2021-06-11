import {Component, OnInit} from '@angular/core';
import {SampleCommand} from "./Commands/SampleCommand";
import {SampleResponse} from "./Querys/SampleResponse";
import {SampleQuery} from "./Querys/SampleQuery";
import {SampleEvent} from "./Events/SampleEvent";
import {ServiceBus} from "../../../cb-cqrs/src/lib/cqrs/ServiceBus";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'CQRS TEST APP';

  constructor(private serviceBus: ServiceBus) {}

  ngOnInit(): void {
    this.serviceBus.sendCommand(new SampleCommand("Helow world"))
    let log = this.serviceBus.query<SampleResponse>(new SampleQuery("Helow World"));
    console.log(log?.body)

    this.serviceBus.sendEvent(new SampleEvent("Helow World"))
  }
}
