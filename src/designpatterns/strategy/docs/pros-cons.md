### Advantages
⚡ **Dynamic Altering**. Be able to switch algorithms at runtime.
👀 **Seperation of Concern**. Isolate implementation details of the algorithm from the code that use it.

🌈 **Composition over Inheritance**. _Composition_ is way more flexible and less error-prone than _Inheritance_.
🧩 **Open/Close Principle**. Introduce new _Strategy_ without breaking the Context.

### Drawbacks
🔥 **Don't Overcomplicate**. If you have minor amount of algorithm and they rarely change, then _if else_ is sufficient.
⁉️ **Strategies Acknowledgement**. Client must be aware of the available _Strategies_ to select a proper one.
🥽 **Lambda Delegation**. If the _Strategy_ has a single method, consider using _Lambda function_, which is offered by most programming languages.