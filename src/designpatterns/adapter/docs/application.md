### Applicability

💻 **_Adapter_ comes into play when you want to use another code whose interface is incomplicable with your current code.**

⚡ The _Adapter_ pattern lets you create a middle-class that serves as transalator between your code class(es) and a legacy/3rd party class(es).

👺 __Use the pattern when you want to use several subclasses that lack some common functionalities.__

💡 You could extend each subclass and add missing funtionalities, but that also enables **_code duplication_**, which is really bad.
A more elegant approach is to wrap the subclasses in an _Adapter_ that implements the common _Target Interface_, gaining them dynamically extended feature. Pretty similar to _Decorator_.