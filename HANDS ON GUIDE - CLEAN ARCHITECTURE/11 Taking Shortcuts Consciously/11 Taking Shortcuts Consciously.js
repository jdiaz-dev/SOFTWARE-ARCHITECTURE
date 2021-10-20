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
    


*/