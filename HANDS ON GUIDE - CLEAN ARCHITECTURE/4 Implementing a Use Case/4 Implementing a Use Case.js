/* 
    4. Implementing a Use Case

        **Implementing the Domain Model
            --in the "example" withdraw and deposit methods only add an activity to ActivityWindow

        **A Use Case in a Nutshell
            --a use case should care about domain logic
            --the use case is responsible to validate bussines rules, it shares this responsability with domain entities

            --if bussiness rules were satisfied, the use case then manipulate the state of the domain model, ---> and will pass that state to a port implemented  ---> by the persistence adapter. --A use case may be to call any outgoing adpater
            --the last step is return value from the outgoing adapter

            --SendMoneyService implements SendMoneyUseCase and use UpdateAccountStatePort implemented by AccountPersistenceAdapter

        **Validating Input
            --validate input is not responsability of a use case

            --validate input belongs to application layer

            -the validation is done in constructor's SendMoneyCommand

            --sendMoneyCommand implements an abstract class for validations and it use Bean Validation API

        **The Power of Constructors <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< to check again
            --it is impossible to create an object with SendMoneyCommand if the state is invalid

            --we use the constructor to make innumtable and make the validations

        **Different Input Models for Different Use Cases <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< to check again
            --we should use differents model for every use case but we might to pollute our bussiness code
            --a dedicated input model for each use is recommendable to prevent unwanted side effects
            --but create a model for every use case come with a cost, due that we have to map incomming data in differentes input models for different use cases

        **Validating Business Rules
            --bussines rules are the core our application

            --bussiness rules require access to current state of the domain model, while validating input doesn't

            --input validation can be implemented declaratively(it can use @NotNull annotations above)
            --bussiness validations need more context

            --we can put bussines rules into domain entity
            --If it’s not feasible to a business rule in a domain entity, we can simply do it in the use case code before it starts working on the domain entities


            --therefore there are three places where we can validate data: sendMoneyCommand(input validation), domain entitty(bussiness validation) and sendMoneyService(if it is not feasible to validate in damain entity)

        **Rich vs. Anemic Domain Model
            --Our architecture style leaves open how to implement our domain model. This is a blessing, because we can do what seems right in our context, and a curse, because we don’t have any guidelines to help us
            --the entities provides methods to change state and only allow changes that are valid according to bussines rules

            --the use case serves as entry point to the domain model
            --anemic domain model doesn't contain domain logic. This means that domain logic is implemented in the use case classes

            -- a rich domain model contains validation of bussiness rules, while with anemic domain model the richness is contained in use cases

            

        **Different Output Models for Different Use Cases <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< to check again
            --we might be tempted to return Account (domain entity) as output model
            --we should think if the caller need a output model as result, it help to keep the use case as specific as posibble. When we have doubt we return as little as possible 

            --sharing the output models tends to tighly couple those use cases, and shared models tends to grow tumorously

            -we should resist to use domain entities as output model


        **What About Read-Only Use Cases?
            --we can have services for use case and service for queries

        **How Does This Help Me Build Maintainable Software?
            --to have use cases separed help to understand better the use case
            --it allow to developers work in diferents use cases



*/


