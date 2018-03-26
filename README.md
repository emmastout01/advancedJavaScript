# Advanced JavaScript

Notes and examples on advanced JavaScript, using the Advanced JavaScript tutorial by Tony Alicea.

## Some important terms

### Syntax Parsers
  A program that reads your code and determines what it does and if its grammar is valid

### Execution Contexts
    A wrapper to help manage the code that is running. This manages which lexical environment is running at a given time. 

### Lexical Environments
    Where something sits physically in the code you write. --It exists in programming languages in which where you write something matters. Where you see things written will impact how those components will 'sit' in the computer instructions.



### The Global Object
- When code is executed, an execution context is created. The JS engine wraps our code in an execution context.
- In JS, 'global' means not inside a function.
- There is always a global object when you run JS. In the case of browsers, the global object is the window. It is available to all the code running inside the lexical environment. 
- In other words, even when we haven't actually written any code yet, once we run the code and create an execution environment, a global object is created.

### Creating an Execution Context and 'Hoisting'
- Hoisting happens because the execution conext is written in two phases: The creation phase and the execution phase. 
- In the creation phase, the global object, 'this', and the outer environment are set up.
- In the creation phase, the JS engine sets up memory space for variables and functions.
-  This step is called 'hoisting.' Before your code is executed line by line, the JS engine has already created memory space for your variables and functions. So, when your code is executed line by line, the engine has already made space for them. 
- So, in our example code,  why could we access whole functions, but not variable values? During the creation phase, entire functions are stored in memory, but variable values are not. Variable values are not assigned until the execution phase. All variables are set as 'undefined' in the creation phase.
- A related note: when we see 'undefined' in the console, what that means is that a value for the variable has not been set yet. 'Undefined' is a special keyword in JS that all variables are assigned to in the creation phase.

### Execution Phase
- Now, the JS engine runs our code line by line. This is after the global object is set up and after functions and variables (but not their values) are stored in memory.


### Single Threaded, Synchronous Execution
- Means that we're only running one execution at a time

### Function Invocation and the Execution Stack
- Function invocation = running a function
- Whenever we invoke (aka call) a function in JS, a new execution context is created. 
- This execution context is then placed on the execution stack. Whichever is on top of the execution stack will run first. 


