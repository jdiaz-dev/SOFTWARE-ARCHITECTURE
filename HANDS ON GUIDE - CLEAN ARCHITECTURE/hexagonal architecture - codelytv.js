/* 
    APPLICATION:
        - it represent the use cases, business cases
        - it provide the domaain semantic to the application
        - it must represent one transactional barrier in database terms and in terms of event publishing

    DOMAIN:
        - it represents the model of our business
        - normally we found value objects and entities. repositorie interfaces (it is our contract to save the data)
        - here also we found the domain services (different from application services)
        - the dependency rule is from external to internal: infraestructure -> application -> domain -> domain

    Command (chatgpt):
        - a command typically represents an intention to perform an action or use case in the system
        - A data object (often immutable) that carries the parameters needed to execute a use case

*/

/* 
    HEXAGONAL ARCHITECTECTURE FLOW:
        - controller create value objects to deliver to application service
        - another aproach is that controller pass data to application service and aplication service create the value objects
        - dto represents command ?, the handler (controller) convert primitive data to value objects
        - applciation service call to domain service, models, repositories
*/

/* 
    questions:
        - what is hexagonal architecture?

*/