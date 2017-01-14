---
layout: docs.hbs
title: Design principles
---

# Design principles:

* **Minimalistic API** - The API should be small and easy to use. Avoid enterprisey JVM like containers and configurations.

* **Build on standards** - Do not try to reinvent solved problems, build on proven tech and standards.
    **Protobuf** for serialization, **gRPC** Streams for network transport, **Consul** for cluster membership

* **Message passing, not object passing** - Serialization is an explicit concern, don't try to hide it. 

* **Be fast** - Do not trade performance for magic API trickery.

* **Cross platform** - do not rely on platform specific functionality, this is enabled by the "build on standards"

* **Offload secondary concerns** - offload features like logging, configuration, scheduling, dependency injection to 3rd party libraries. they are not part of the core problems solved by the framework.

