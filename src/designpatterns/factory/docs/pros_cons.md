# Factory
### Advantages
1️⃣ **Single Responsibility Principle**. Seperate the Product creation code into the subclasses, making it easier to maintain.
🧩 **Open/Closed Principle**. Be able to introduce new Product without breaking the existing ones.
🤯 **Loose Coupling**. Avoid tight coupling between Factory and the Concrete Product.

### Drawbacks
🧠 **Code Complexity**. Increase overall code complexity by adding layer(s) of abstraction.

# Abstract Factory
### Advantages
All of _Factory_'s with:
🧤 **Complicability**. Can be sure that Products from Factory are complicable with each other (distinct family can work through each family's Interface).

### Drawbacks
🧠 **Code Complexity**. The overall complexity can goes insane if overusing _Abstract Factory_ making maintainance a lot more troublesome.