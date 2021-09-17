/*
  8. Mapping Between Boundaries

    **The “No Mapping” Strategy
      --no mapping between boundaries is completly valid especially when it is only a CRUD
      --many applications start with only a CRUD, later it grows and we can mapping between web and applications layer


    **The “Two-Way” Mapping Strategy
      --every layer map its content according its needs:
        ♥ the web layer map to present data
        ♥ the persistence layer map according to persistence model
      --the advantage of this mapping strategy is that every layer has a model according to its needs
      --the drawbacks is that due to mapping, it is produced a lot boilerplate code, besides to debug this mapping is pain

    **The “Full” Mapping Strategy
      --every layer has its own mapping model
      --there is a command (model) for every use case
      -- (IMPORTANT)no recommendable between the aplication layer and persitence layer due to mapping overhead
      --the use case might return an domain model as output model

      --the strategies mapping should be mixed

    **The “One-Way” Mapping Strategy
      --the models in every layer implements the same interface. It interface has the state of domain and it allows to map according to needs of every layer
      --this interface is a state interface
      --we can return the domain model without map 
      --the outer layer decide if works with the interface 
    
      --this concerpt palys good with the concept DDD concept of a factory, where the factory in terms of DDD reconstituting a domain object from a certain state
      --every layer only can map one way

      --this strategy is conceptually more difficualt that another strategies

      --this strategy play better if the models are similar because return without need to map

    **When to use which Mapping Strategy?
      --it depends
      --we cannot set a hard and fast global rule
      --we can start with a simple mapping strategy and later implement a complex strategy according the case
      --the team should follow a guideline to apply a mapping strategy. The GUIDELINE should answer the question which mapping strategy should be the first choise in every situacion
      --we might apply different mapping strategy in every layer


      ···Example 1: If we use full mapping strategy in web and application layer, in order to decouple an use case from another, we don't have to deal with innecesary data in every use case
      ···Example 2: in order to modify an use case the first choise is no mapping strateggy between web and application layuer to void mapping overhead, however when issue persistence is present, we move to two-way mapping strategy
      ···Example 3: if we're working in a query no mapping stratey is the first choise between web and application layer and beetwen application and persistence layer to void mapping overhead, however when web or persistence issues is present we move to two-way mapping strategy

      --the GUILDELINES should be present always in the mind of developer, the team should be checking constantly this guidelnes

      check the detailed examples: pages 75 and 76


    **How Does This Help Me Build Maintainable Software?
      --the incomming and outpoing portsdefine how the layers communicate, they acting as gatekeepers
      --we can use a different mapping strategy for every use case, it allows to evolve the mapping strategy in the time if it is necessary
      --to be selecting a mapping strategy for differents case is harder and require more time and communication, but the reward is a code more mantainable


 */