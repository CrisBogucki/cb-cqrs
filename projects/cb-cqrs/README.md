# cb-cqrs
The CRQS library as TypeScript for angular framework

## Installation
Using npm:
```clickhouse
$ npm i -g cb-cqrs
$ npm i cb-cqrs --save
```

## How to Use
- Add module *CbCqrsModule* in your main module
  ```angular2html
  @NgModule({
    imports: [
      ...
      CbCqrsModule
      ...
    ]
  ```

- Register providers
  ```angular2html
  providers: [BaseContainerIoC, CommandBus, QueryBus, EventBus],
  ```

- Register containers for handlers
  ```angular2html
  export class AppModule {
    constructor(cIoC: CommandContainer, qIoC: QueryContainer, eIoC:EventContainer) {
    }
  }
  ```
  
  sample container IoC
  ```typescript
  import {Injectable} from "@angular/core";
  import {SampleCommandHandler} from "../Commands/SampleCommandHandler";
  
  @Injectable({providedIn: 'root'})
  export class CommandContainer {
    constructor(sampleCommandHandler:SampleCommandHandler) {}
  }
  ```

### First CommandHandler
- Create Command of ICommand
  ```typescript
  import {ICommand} from "cb-cqrs";
  export class SampleCommand implements ICommand{
    body: string;
    constructor(body: string) {
        this.body = body
    }
  }
  ``` 

- Create CommandHandler of IHandleCommand<>
  ```typescript
  import {Injectable} from "@angular/core";
  import {BaseContainerIoC, IHandleCommand} from "cb-cqrs";
  import {SampleCommand} from "./SampleCommand";
  
  @Injectable({providedIn: 'root'})
  export class SampleCommandHandler implements IHandleCommand<SampleCommand> {
  
    constructor(private ioc: BaseContainerIoC) {
        ioc.registerCommand(this);
    }
  
    Handle(command: SampleCommand) {
        console.log('===> Message from SampleCommandHandler', command.body);
    }
  }
  ```


- Handle Handler in sample Componnet
  ```typescript
  constructor(private commandBus: CommandBus) {}
 
  ngOnInit(): void {
      this.commandBus.SendCommand(new SampleCommand("hellow world"))
  }
  
  ``` 
  



