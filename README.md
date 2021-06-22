# cb-cqrs
The CRQS library as TypeScript for angular framework

## Installation
- Using npm
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

- Register containers for handlers
  ```typescript
  export class AppModule {
    constructor(cIoC: CommandContainer, qIoC: QueryContainer, eIoC:EventContainer) {
    }
  }
  ```

- Sample containers IoC
  ```typescript
  @Injectable({providedIn: 'root'})
  export class CommandContainer {
    constructor(sampleCommandHandler:SampleCommandHandler) {}
  }

  @Injectable({providedIn: 'root'})
  export class QueryContainer {
    constructor(sampleQueryHandler:SampleQueryHandler) {}
  }

  @Injectable({providedIn: 'root'})
  export class EventContainer {
    constructor(sampleEventHandler_WhenOnStart:SampleEventHandler_WhenOnStart, sampleEventHandler_WhenOnPause:SampleEventHandler_WhenOnPause) {}
  }
  ```

## First CommandHandler
- Create SampleCommand of ICommand
  ```typescript
  export class SampleCommand implements ICommand{
    body: string;
    constructor(body: string) {
        this.body = body
    }
  }
  ``` 

- Create SampleCommandHandler of IHandleCommand<SampleCommand>
  ```typescript  
  @Injectable({providedIn: 'root'})
  export class SampleCommandHandler implements IHandleCommand<SampleCommand> {
    constructor(private ioc: BaseContainerIoC) {
        ioc.registerCommand(this);
    }
    handle(command: SampleCommand) {
        console.log('===> Message from SampleCommandHandler', command.body);
    }
  }
  ```

- Handle SampleCommand
  ```typescript
  constructor(private serviceBus: ServiceBus) {}
 
  ngOnInit(): void {
      this.serviceBus.sendCommand(new SampleCommand("Helow world"))
  }
  
  // console result  
  // ===> Message from SampleCommandHandler Helow world
  ```

## First QueryHandler
- Create SampleQuery of IQuery
  ```typescript
  export class SampleQuery implements IQuery{
    body: string;
    constructor(body: string) {
        this.body = body}
  }
  ``` 

- Create SampleResponse of IResponse
  ```typescript
  export class SampleResponse implements IResponse{
    body: string;
    constructor(body: string) {
    this.body = body
    }
  }
  ``` 

- Create SampleQueryHandler of IHandleQuery<SampleQuery, SampleResponse>
  ```typescript
  @Injectable({providedIn: 'root'})
  export class SampleQueryHandler implements IHandleQuery<SampleQuery, SampleResponse> {
    constructor(private ioc: BaseContainerIoC) {
        ioc.registerQuery(this);
    }
    handle(query: SampleQuery): SampleResponse {
      let result = new SampleResponse('===> Message from SampleQueryHandler ' + query.body);
      return result;
    }
  }
  ```

- Handle SampleQuery
  ```typescript
  constructor(private serviceBus: ServiceBus) {}
 
  ngOnInit(): void {
    let log = this.serviceBus.query<SampleResponse>(new SampleQuery("Helow World"))
    console.log(log.body)
  }
  
  // console result 
  // ===> Message from SampleQueryHandler Helow World
  ```

## First EventHandler
- Create SampleEvent of IEvent
  ```typescript
  export class SampleEvent implements IEvent {
    body: string;
    constructor(body: string) {
      this.body = body
    }
  }
  ``` 

- Create SampleEventHandler_WhenOnStart of IHandleEvent<SampleEvent>
  ```typescript  
  @Injectable({providedIn: 'root'})
  export class SampleEventHandler_WhenOnStart implements IHandleEvent<SampleEvent> {
    constructor(private ioc: BaseContainerIoC) {
      ioc.registerEvent(this);
    }
    handle(event: SampleEvent) {
      console.log('===> Message from SampleEventHandler_WhenOnStart ' + event.body);
    }
  }
  ```

- Create SampleEventHandler_WhenOnPause of IHandleEvent<SampleEvent>
  ```typescript  
  @Injectable({providedIn: 'root'})
  export class SampleEventHandler_WhenOnPause implements IHandleEvent<SampleEvent> {
    constructor(private ioc: BaseContainerIoC) {
      ioc.registerEvent(this);
    }
    handle(event: SampleEvent) {
      console.log('===> Message from SampleEventHandler_WhenOnPause ' + event.body);
    }
  }
  ```

- Handle SampleEvent
  ```typescript
  constructor(private serviceBus: ServiceBus) {}
  ngOnInit(): void {
    this.serviceBus.sendEvent(new SampleEvent("Helow World"))
  }
  
  // console result  
  // ===> Message from SampleEventHandler_WhenOnStart Helow World
  // ===> Message from SampleEventHandler_WhenOnPause Helow World
  ```


