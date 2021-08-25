/*  5. Implementing a Web Adapter
 
        **Dependency Inversion
            --the application layer provides specific ports throught which the web adapter may communicate, th services implements these ports and the web adapter may call these ports

            --the reason to add ports is that these ports are a specifications of the places where outside world interacts with our application core. We know which communication the outside world takes place

        **Responsibilities of a Web Adapter
            --we should validate that we can transform the input model of the web adapter into the input model of the use cases

            --the application core doesn't know nothing about HTTP request that manage the adapter, because can lost the option to perform the same damain logic from other incomming adapters

            --the recommendation is start to development with the domain and application layer, so we void to blur the boundary between the aplication and the adapter
            
        **Slicing Controllers
            --works with small classes is better, therefore we should split our controllers 
            --we should create a separate controller, potentially in a separate package. Also every controller should have its own model
            
            --the controller can share models but in another package or use primitive data as input

        **How Does This Help Me Build Maintainable Software?
            --when we create a controller, we should think as an adapter that use a method to send data with our appplication layer
            --the application layer must not know HTTP, it will make more easy replace an adapter
            --we can have separate controller with its own models

*/