/* 
  11 Taking Shortcuts Consciously

  **The Responsibility of Starting Clean
    --take shortcuts is bad because we might create the  "creating broken windows"
    --however there are times that take shortcuts is pragmatic, because the part of code that we are working is not important, it is a prototype, or for economical reasons

    --we should to document the shortcuts in Architecture Decision Records (ADRs) for example, it will help to us and members team in the future

  **Sharing Models between Use Cases
    --share a input or output model will couple 2 use cases 
    --SHORTCUT: we can share a input or output model between two use cases if both use cases are functionallity bound
    --NOT SHORTCUT: if every use case evolve separately, we must not share the input or output model, even if it means duplicate input or output classes

    
  **Using Domain Entities as Input or Output Model
    --if we use domain entity as input model of use case, we are creating a coupling between domain entity to the use case
    --SHORTCUT: we can use the domain model as input or output model of use case when we our use cases are a simply update or create use case
    --NOT SHORTCUT: as soon we need extra logic to domain entity (rich domain entity), we need to create a dedicated input or output model

    --in agile environments, the logic starts with a simple create or update use case, but when the Minimun Viable Product is growing, but need to detect the exactly moment create a dedicated input or output model for our uses cases

  **Skipping Incoming Ports
    --SHORTCUT: against of outgoing ports, the incoming ports don't need to ports to create dependency inversion, so we can omit the use of incoming ports
    --NOT SHORTCUT: however the incoming ports mark clearly entry points to appliction layer, we might inject an wrong service in our adapter, or use an incorrect method of application service

  **Skipping Application Services
    --SHORTCUT: we can make that persistence adapter implements directly incomming port, it in cases of simple CRUDS, the DOMAIN class will be used as input or output model
    --NO SHORTCUT: we can be tempted to add domain logic into Persistence Adapter, we must be able to detect when the bussines logic is doing added to inmediately create our application services 

  **How Does This Help Me Build Maintainable Software?
    --the shortcuts make sense from economic point of view, the shortcut can help in simple CRUDs states
    --we need to able to detect when the logic is out of CRUD state to replace the architecture with more mantainable architecture
    --we must document our architecture and when we make a shortcut desicion
*/