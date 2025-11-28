### Advantages
🧩 **Open/Close Principle**. Introduce new Subscriber without affecting other Subscriber(s).

⚡ **Runtime Tweaking**. Capability of establish relations between objects at runtime.

### Drawbacks
😡 **Randomness Order**. Subscriber(s) are announced in an arbitrary order, so there exists time where Subscriber B is updated but Subscriber A is not yet! This is the core root of wrong runtime assumptions.