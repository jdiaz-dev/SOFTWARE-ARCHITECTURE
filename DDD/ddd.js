/* 
    -> Strategic design:
        - focus one Business architecture
        - example: Bounded Contexts, Context Maps, Integration

    -> Tactical design:
        - focus on Model implementation
        example: Entities, Value Objects, Aggregates, Repositories, Services, Factories
*/

/* 
    -> bounded context: 
        -A bounded context is a logical boundary within which a particular model is defined and applicable. It helps to avoid ambiguity and confusion by clearly defining the scope of a model.
        - first to start with backend and fronted dividisions, start with bounded contexts defitions
    -> subdomain: 
        - A subdomain is a specific area of the business domain that can be modeled independently. It represents a distinct part of the business that has its own rules and logic.
        -- (codelytv) 
            - domains are bounded contexts (it is the same)
            - if domain is the entire business, subdomains are the parts of the business

    -> module: 
        - modules are a way to organize and structure the domain model into cohesive, meaningful units. They are not a DDD tactical pattern like Aggregate or Entity, but rather a strategic organizational tool to manage complexity.
        - Modules in DDD are logical groupings of related domain concepts (Entities, Value Objects, Aggregates, etc.) that encapsulate and hide internal details, exposing only what’s necessary.
        - (codelytv) 
            - think it as mini-bounded context, thinks that have sense inside the bounded context
            - separation code of first level
            - the normal relationship is 1 modube by aggregate

    * IMPORTANT (codelytv):
        - the difference between bounded context and subdomain is that bounded context belongs to the solution meanwhile the subdomain belongs to the business problem
        - normally 1 microservice is a bounded context, but not always
        - can exiss 2 microservices (app) by one bounded context
*/

/* 
    (chatgpt) BUILDING BLOCKS OF DOMAIN MODEL:
        - Entity:	Object with a unique identity (e.g. Patient, MealPlan)
        - Identifier:    Unique identifier for an Entity (e.g. PatientId, MealPlanId)
        - Value Object:	
            - Object defined by attributes, no identity (e.g. Calories, DateRange)
            - it is a boundary of entities
            - componse multiple value objects and entities
            - The Aggregate Root is the main Entity that guarantees consistency across the whole Aggregate.
            - not all entities are aggregate roots, but all aggregate roots are entities
        - Aggregate: A cluster of Entities and VOs treated as a single unit (MealPlan as root with meals)
        - Repository:	Abstraction for retrieving/storing aggregates
        - Domain Service:	Logic that doesn’t belong to a single entity (e.g., MealPlanGenerator)
        - Domain Events: Something that happened in the domain (e.g., MealPlanCreated)
*/

/* 
    Value Object:
        - validations to acommplish integrity validations and void duplicate validations in the application
        - domain semantics in the methods
        - value object model behavior and data

        - (chatgpt) value objects has not identity (example: uuid, id, etc)
        - Has no identity 
        - Is immutable 
*/

/* 
    Repository:
        - (codelytv) The repositories interact only with aggregate roots or identifier of value objects and return the persisted aggregate root. Never can receiver 

*/

/* 
    - the identifiers only validate that is one id with one valid format (in entity?)
    - value object model behavior and data
*/

/* 
    application can have multiple bounded contexts?
    - aplications between bounded contexts?
        - the applications consume the bounded contexts
    - modules inside the applications?
        -  as my athvito-nutrition-backend software
*/

/* 
    ADVANTAGES OF INVERSION DEPENDENCY:
        - decoupling: high-level modules do not depend on low-level modules, both depend
        - easier testing: high-level modules (domain, application) can be tested independently of low-level modules (infraestructure)
        - flexibility: high-level modules can be easily replaced with different implementations of low-level modules
*/

/* 
    Repository:
        - (codelytv) The parameters must have domain entities (aggregate, entity and identifier)
        - (codelytv) The repository pattern must not  known details of the database, as format of limit, pagination, etc
        - (codelytv) The details of implementation must realize at the end, to don't know nothing of infraestructure

*/