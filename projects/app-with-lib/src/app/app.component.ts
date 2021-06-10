import {Component, OnInit} from '@angular/core';
import {SampleCommand} from "./Commands/SampleCommand";
import {CommandBus} from "cb-cqrs/lib/cqrs/Command/Code/CommandBus";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  title = 'app-with-lib';

  constructor(private commandBus: CommandBus) {
  }

  // constructor(private commandBus: CommandBus, private queryBus: QueryBus, private eventBus: EventBus) {
  // }

  ngOnInit(): void {
    //this.commandBus.SendCommand(new SampleCommand("ala ma kota"))
    // let log = this.queryBus.Query<SampleResponse>(new SampleQuery("ala ma kota"));
    // console.log('<=== Wiadomosc z SampleQueryHandler ', log);
    //
    // this.eventBus.SendEvent(new SampleEvent("Lecimy"));
  }
}
