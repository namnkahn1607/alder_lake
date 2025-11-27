### Roadmap to achieve Factory Method
1. Feel the pain of Object type addition.
2. Put the Object type inside a general class, considering it a Simple Factory.
3. The Simple Factory has a whole of switch statement to decide which specific Object instance type to return.
4. Make the Simple Factory abstract, tempting to its object creation method 'overridable'. Now the Simple Factory becomes Abstract Base Factory.
5. Delegate the Object construction to subclasses that extends the Abstract Base Factory by overriding the Object construction method, feeding its own logic.
6. Sure enough you want the Object to behave nearly identical -> make all of them implement the same Product Interface.