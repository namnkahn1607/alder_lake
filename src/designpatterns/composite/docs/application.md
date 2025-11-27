### Applicability
🌳 **Use the _Composite_ pattern when you have to implement a Tree-like object structure.**
💫 The _Composite_ pattern provides Interface to both simple leaves and complex containers consisting of simple leaves or sets of containers. This lets you construct a nested recursive Tree-like object structure.

🥯 **Use the pattern when you want the Client to treat both simple and complex elements uniformally.**
🌊 All elements share a common Interface. The Client no longer have to worry about the Concrete class of the Component.