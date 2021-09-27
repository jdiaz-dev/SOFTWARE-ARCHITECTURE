/* 
    10. Enforcing Architecture Boundaries
    
      **Boundaries and Dependencies
        --enforcing architecture boundaries means that enforcing that dependencies point in the right direction
        --the configuration layer contains factories that creates adapter and service objects to provide to injection dependency mechanism
        --this chapter is about the woys to enforce the Dependency Rule


      **Visibility Modifiers
        --visibility modifiers are important to void violate the Dependency Rule
        --with default modifier in JAVA, only class in same package will able to access to the methods of a class, it void exposition methods to outside word
        --however with subpackages it does not work, due to Java treat a subpackage as a external package

      **Post-Compile Checks
        --we can run architecture test to check that Dependency Rule is being accomplish
        --a tool to test if there are wrong dependencies is ArchUnit (JAVA)
        --but with archUnit, these test are not infalible; if we make a  refactor the test will run and it will not find Dependecy Rule Violation

      **Build Artifacts
        --we have used only packages to define our architecture
        --an artifact is the result of build process
        --there are 2 populr build tools  : maven and gradle
        --we can call to maven or gradle to compile, test and package the code of our application in a single jar file
        --a build tool first check if all artifacts the codebase depends is available, but it will fail in compile time
        --in every module or layer we create a separated build module with its own code and artifacts; finally in build script we specify only dependencies to other modules that are allowed according our architecture

        --we can create a artifact by every part of module in this way: an artifact by input and output adapter, input and output port, services and domain logic confirating the dependencies according our architecture
        
*/

/* 
  --I stayed here: 
  Next, we could decide to split up the application module further
*/