/* 
    3. Organizing Code
        --there are classes that should be imported from another packages

        **Organizing By Layer
        **Organizing By Feature
        **An Architecturally Expressive Package Structure
            --this folder structure reflects the architecture where there are ports and adapters
            --we can take advantage of this architecture and use DDD where the high level package reflects the domain

            --the adapters are private, but it is used by the service(application)
            --the classes of domain are public
            --the ports and adapters are public

            --there aren't accidental dependencies from layer application to adapter classes

        **The Role of Dependency Injection


        **The Role of Dependency Injection



*/