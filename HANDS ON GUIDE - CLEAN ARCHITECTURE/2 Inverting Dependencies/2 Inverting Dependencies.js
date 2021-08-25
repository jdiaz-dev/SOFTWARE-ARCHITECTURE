/* 
    2. Inverting Dependencies

        **The Single Responsibility Principle
            --the current definition is :       ♥ A component should have only one reason to change. ♥
            -SRP helpt to void side effect

        **The Dependency Inversion Principle
            --due to the domain layer’s dependency to the persistence layer, if we change something in the persistence layer we almost always need to change the domain code
            --the domain code is the most important code of our application. we don't want to change it when something happens in the persistence code 

            --DEPENDENCY INVERSION: We can turn around (invert) the direction of any dependency within our codebase

        **Clean Architecture
            --the domain code has not any outward facing dependencies
            --the Dependency Rule: the dependencies between those layers must to point inward
            --round of core we can find the other components that support the bussiness rules
            --we have all freedom we can wish for to model the domain code


            --the clean architecture has a cost, due that we have domain logic completly decoupled from outer layers as persistence or UI, we have to mantain a model for our application's entities in each layer

            --thanks to this decoupling we can to free the domain code from external problems of frameworks

        **Hexagonal Architecture
            --the hexagonal archtiecture provide specific ports for every adapter

            --For driving adapters, the port might be an interface that is implemented by one of the uses case
            --For a driven adapter, it might be an interface that is implemente by the adapter and called by the core

            -the hexagonal architecture due its concepts is called ports and adapters architecture

        **How Does This Help Me Build Maintainable Software?
            --due to decoupling of UI and persistence layer we reduce number of reasons to change our codebase. And less reasosn to change means better mantainability
            --we can model domain login as best fits to the bussines problems, and the persistence and ui layers can be modelled as best fits to persisntence and UI problems

*/


/* 
    **IMPORTANT: dependency inversion is different to injection dependency
    --the injection dependency allows the inversion dependency

    --in OOP we achive the abstraciton creation interfaces becuase none they is something concret
    --the class of high level say the things that class of low level should make
    --the modules(classes) of low level depen of abstractions, therefore we need adapters
*/