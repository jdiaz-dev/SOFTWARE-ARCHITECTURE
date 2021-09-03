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



*/