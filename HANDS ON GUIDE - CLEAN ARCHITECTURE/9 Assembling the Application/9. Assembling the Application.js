/* 
  9. Assembling the Application
    **Why Even Care About Assembly?
      --all dependencies should towards the domain code
      --if an use case instantiate directly the persistence class, the dependency will be in wrond direction, therefore we need use the ports
      --we must respect the dependency direction (all depend of domain code)
      
      --we need a configuration component with access to all our classes in order to instantiate these
      --the configuration component is the responsable to assembly our application
      --the configuration component must can access to configuration parameters and during the assebly pass these parameters to the application

      --we need a outside component that tale care of the wiring
      
      
    **Assembling via Plain Code


*/