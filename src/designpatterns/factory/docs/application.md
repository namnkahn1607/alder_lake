### Applicability
🤔 **The _Factory_ pattern is useful when you don't know beforehand the exact types and dependencies of the objects that your code should work with.**

👾 _Factory_ pattern promotes scalability in the number of Product type independently with ease. 

🧩 **Use the _Factory_ pattern when you want to provide users of your library code a way to extends its internal components.**

🌳 Let's see an example: Your library provide Factory and Product as an abstract/interface for creating a ProductA that serves a specific task. Now the client want to 'morph' the ProductA so that it fits their need more, so they can simply create another Factory, suppose ClientFactory that implements/extends base Factory, and the ClientProduct that implements/extends base Product.

🔑 **_Factory_ patterns also provides the key to Object reusing instead of instantiate new one each time.**

🥳 That's a lot of work to do. The code that seeks for existing instance in the object pool can get complicated and you might don't want this code to be 'everywhere', so consider putting it in the general Factory.