import {Component, OnInit} from '@angular/core';
import {CommandBus} from "../../../cb-cqrs/src/lib/cqrs/command/Code/CommandBus";
import {QueryBus} from "../../../cb-cqrs/src/lib/cqrs/query/Code/QueryBus";
import {EventBus} from "../../../cb-cqrs/src/lib/cqrs/event/Code/EventBus";
import {SampleCommand} from "./Commands/SampleCommand";
import {SampleResponse} from "./Querys/SampleResponse";
import {SampleQuery} from "./Querys/SampleQuery";
import {SampleEvent} from "./Events/SampleEvent";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'CQRS TEST APP';

  constructor(private commandBus: CommandBus, private queryBus: QueryBus, private eventBus: EventBus) {
  }

  ngOnInit(): void {
    this.commandBus.SendCommand(new SampleCommand("ala ma kota"))
    let log = this.queryBus.Query<SampleResponse>(new SampleQuery("ala ma kota"));
    console.log('<=== Wiadomosc z SampleQueryHandler ', log);

    this.eventBus.SendEvent(new SampleEvent("Lecimy"));
  }
}
