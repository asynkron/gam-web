---
layout: docs.hbs
title: Design principles
---

# Design principles

### Minimalistic API
The API should be small and easy to use. Avoid enterprisey JVM like containers and configurations.

### Build on standards
Don't try to reinvent solved problems, build on proven tech and standards.
Protobuf for serialization, gRPC Streams for network transport, Consul for cluster membership

### Message passing, not object passing
Don't try to hide serialization. Serialization is an explicit concern 

### Be fast
Don't trade performance for magic API trickery.

### Cross platform
Don't rely on platform specific functionality, this is enabled by the "build on standards"

### Offload secondary concerns
Offload features like logging, configuration, scheduling, dependency injection to 3rd party libraries. they are not part of the core problems solved by the framework.

