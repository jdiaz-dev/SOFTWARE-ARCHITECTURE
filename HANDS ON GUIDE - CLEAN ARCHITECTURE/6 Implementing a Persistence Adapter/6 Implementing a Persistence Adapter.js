/* 

    6. Implementing a Persistence Adapter
        
        **Dependency Inversion
            --obviously still in runtime the application service depend of persisntence adapter. If we introduce a bug in the persistence layer, it will affect to application core
            
            --but use interfaces as contract we can make modifications in persistence adapter

        **Responsibilities of a Persistence Adapter
            --persistence adpater take the input
            --the persistence adapter maps the input model to a format it can wok to modify or query the database
            
            --it is possible to map input model in JPA entities
            --the important part is that the input model to persistence adapter lies within application core, therefore if we make changes in the persistence adapater it will not be able to affect to application core

            --the persistence adapter query the database and it receive the query result, after it result must be mapped as output model
            --the output model must be returned to the application core(SendMoneyService)

        **Slicing Port Interfaces
            --dependencies to methods that I service don't need can cuase troubles that I did'nt expect
            --every service must only depends on the methods that actually need 

            --every port should have the method that our service will need. Where we only plug the port that it need
            --but of course, there are cases where the ports can have many method because these need between them

        **Slicing Persistence Adapters
            --if we create an only class that implements all our pesistence ports, we must not create many adapter class
            --we also can split all our persistence adapter by every domain that need persistence operations
            --we can split even more our persistence adapter classes (for instance ones for JPA and another for plain SQL)
            --our bounded context implies coundaries, therefore Account Context may not access to Billing context (pag. 51), if a context need something of another, it can access via a dedicatend incoming port

        **Example with Spring Data JPA
            --there are many strategies: mapping to build domain entity and mapping to store in database
            --we can use no mapping strategy
            
            --in this case we effort a lot to mapping back and forth because for instance if we use only JPA annotations in our domain model, we are forced for instance to make compromises as no-args constructor, and we want to load our domain model part anyways
            --it allow us create a rich domain model wihout to compromise our persistence
            
        **What about Database Transactions?
            --the transaction should span all write operations to the database for every use use case, so if one faill we can rolled back reversed 

            --due that persistence adapter don't know all transtactions for every use case, it must to delegate to the services that orchestrate to the persistence adapter (In java it is easy adding @Transaction annotation)


        **How Does This Help Me Build Maintainable Software?
            --make the persistence adapter as plugin to domain, free to our domain to create rich domain model
            --use ports allow if we want remove all persistence adapter and add another system database store 



*/ 