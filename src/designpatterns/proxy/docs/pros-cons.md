### Advantages
🧤 **Implicit Processing**. Be able to control the Real Service object without Client knowing about it.
♻️ **Lifetime Management**. Recycle/Keep alive for the Service object once the Client doesn't care anymore.
🧩 **Open/Closed Principle**. Introduce new _Proxy_ without breaking the old _Proxy_.

### Drawbacks
🧠 **Code Complexity**. Increase overall code complexity by adding layer(s) of abstraction.
⌚ **Time Suspendation**. Client might experience delays in critical performance _Proxy_.