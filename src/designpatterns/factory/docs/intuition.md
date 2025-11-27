### 1. Roadmap to achieve Factory Method
1. Feel the pain of Object type addition.
2. Put the Object type inside a general class, considering it a Simple Factory.
3. The Simple Factory has a whole of switch statement to decide which specific Object instance type to return.
4. Make the Simple Factory abstract, tempting to its object creation method 'overridable'. Now the Simple Factory becomes Abstract Base Factory.
5. Delegate the Object construction to subclasses that extends the Abstract Base Factory by overriding the Object construction method, feeding its own logic.
6. Sure enough you want the Object to behave nearly identical -> make all of them implement the same Product Interface.

### 2. Roadmap to achieve Abstract Factory (from Factory)
1. You have a set of related Factories with their responsibilities blending hard, and feel that your code will likely have more of these in the future.
2. This signals that we need more abstractions, not decouplings.
3. Identify the second layer (dimension) of the Product Instance, map out the matrix of distint Product types versus variants of these Products.
4. Declare the Abstract Factory, all blending Factories can extend this Abstract Base Factory to get its own functionality.
5. Implement a set of Concrete Factory classes, one for each product variant (family).
6. Now our Factory becomes Generalist (Abstract), we need a function to instantiate Concrete Factories based on the argument given by Client code.