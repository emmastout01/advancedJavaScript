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
- 