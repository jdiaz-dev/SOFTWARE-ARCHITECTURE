/* 
    TERMS:
    **DOMAIN: Formalmente, representa el tema objetivo de un proyecto 

    **REPOSITORY: In software development, a repository is a central file storage location

    **UTILITY: Utility Class, also known as Helper class,

    **USE CASE (1): A use case is a written description of how users will perform tasks on your website,  from a user's point of view, a system's behavior as it responds to a request. 
    
    A use case is a description of how a person who actually uses that process or system will accomplish a goal. It's typically associated with software systems, but can be used in reference to any process. For example, imagine you're a cook who has a goal of preparing a grilled cheese sandwich. The use case would describe through a series of written steps how the cook would go about preparing that sandwich. A use case helps you understand where errors could occur in the process and design features to resolve those errors.
    
    **USE CASE (2) : focus on users, actions, and processes. This is gret from a bussiness perspective
*/

/* 
    ♥ ANEMIC DOMAIN MODEL : Anemic domain model is the use of a software domain model where the domain objects contain little or no business logic (validations, calculations, business rules etc.).

    ♥ PORTS : borders/PORTS, but to leave enough space to represent the different interfaces needed between the component and the external world

    ♥ ADAPTERS : Adapters are the glue between components and the outside world. 

    ♥ COMPONENTNTES : core, application, the database
*/

/* 
    ♥ Command query responsibility segregation (CQRS):  Command query responsibility segregation (CQRS) is an application architecture pattern. This pattern is often used in event driven applications and is frequently associated with event sourcing. It consists of separating the logic that handles commands from the logic that handles queries.

    ♥ CommandQuerySeparation (CQS): The term 'command query separation' was coined by Bertrand Meyer in his book "Object Oriented Software Construction" - a book that is one of the most influential OO books during the early days of OO. (The first edition is the one that had the influence, the second edition is good but you'll need several months in a gym before you can lift it.)

    The fundamental idea is that we should divide an object's methods into two sharply separated categories:

    Queries: Return a result and do not change the observable state of the system (are free of side effects).
    Commands: Change the state of a system but do not return a value.
    Because the term 'command' is widely used in other contexts I prefer to refer to them as 'modifiers', you also see the term 'mutators'. 
*/

/* 
    --JPA : java persistence API, is is an ORM
    
    --spring boot: it help with JAR(java archive) and deploy to a server, it is very usefull with infraestructure

    --spring data: it is a project whose purpose is to unify and ease access to differets kinds of persistence stores 
*/

/* 
    TRANSACCION: it should span all write operations to the database
*/


