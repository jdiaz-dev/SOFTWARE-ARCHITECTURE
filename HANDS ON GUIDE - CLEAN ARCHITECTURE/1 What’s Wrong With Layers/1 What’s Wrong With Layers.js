/* 

    1. What’s Wrong With Layers?
        --with we use properly architectures by layers we can change web or persistence techonologies without affect our domain logc
        --we can add new features without affect existing features



        **It Promotes Database-Driven Design
            --the state is an important part of an application
            --commonly we implmente the architecture based in the database

            --the conventional layered architecture make sense, since we’re going with the natural flow of dependencies. But it makes absolutely no sense from a business point of view! We should build the ****** domain logic ****** before doing anything else!
            --once we know we’re building the right domain logic should we move on to build a persistence and web layer around it.

            --if we combine an ORM framework with a layered architecture, we’re easily tempted to mix business rules with persistence aspects.

            -in layered architecture can access to layer persistence creating a strong coupling between them
            --Our services use the persistence model as their business model and not only have to deal with the domain logic, but also with eager vs. lazy loading,


            ♥ CONSLUSION: we should to build domain logic before another thing, after the web or persistence data, it can make our application more sensible to changes

        **It’s Prone to Shortcuts
            --the layered architecture pround to use shortcuts and move components that are above lower

        **It Grows Hard to Test
            --commonly we access directly to persistence layer from web layer(controller) because we don't need use the domain layer, if it happends once, it will happens many times also
            --if we implement domain logic in web layer(controller), we can spread domain logic in all application when we need expands use case
            --in the web layer we will need to add test layer persistence besides to domain logic, which will be more dificult to use unit test, and create a complex test is the first step towards no test because we haven't time for them

        **It Hides the Use Cases
            --domain logic is scattered that we can access to it from web and persistence layers, it make difficult to modify or add functionality, therefore it make difficult to find certain use case

            --it will be more easy to have a highly-specialized narrow domian service. Instedd to hvae UserService we would have RegisterUserService

        **It Makes Parallel Work Difficult
            --to work parallel, our architecture must support work parallel, and layered architecture doesn't help here
            --in a layered architecture only a programmer can work on the feature at same time. First the persistence, domain and web layers

        **How Does This Help Me Build Maintainable Software?
            --a layered architecture can work good if we add strict rules. And that self displine become less strict due to deadlines
            --the layered architectue allows that many things to go wrong
*/

