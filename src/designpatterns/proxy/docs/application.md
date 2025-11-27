### Applicability
😴 **Lazy initialization (virtual _Proxy_). When you have a heavyweight Service object that wastes a ton of system resource by always being up all the time.**
🎐 Instead of loading the Servide once the app starts, we can wrap around the Service a _Proxy_ that init the Service when the urge rises.

🔐 **Access control (protection _Proxy_). Only specific Client can gain access to a particular Service.**
🪪 The _Proxy_ can pass the request to the Real Service object once the Client's credentials match some criteria.

📦 **Caching request result (caching _Proxy_). If the request result are very resource-extensive, you may want to cache the result for future re-use.**

🛜 **Local execution of a remote Service (remote _Proxy_). When the Real Service object is located on a remote server.**
🌐 This time, the _Proxy_ will be hanging on the network.

📃 **Logging request (logging _Proxy_). Keeping a history of requests to the Service.**

🏁 **Smart reference, _Proxy_ can be applied along with _Observer_ to manage all existing requests and caching results, and performing recycle as needed.**