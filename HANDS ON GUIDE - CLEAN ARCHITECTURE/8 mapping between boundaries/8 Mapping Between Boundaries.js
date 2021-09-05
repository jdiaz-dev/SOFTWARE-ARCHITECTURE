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


 */