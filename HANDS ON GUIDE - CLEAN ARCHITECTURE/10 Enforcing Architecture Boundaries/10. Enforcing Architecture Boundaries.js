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
        
*/