---
layout: docs.hbs
title: Design principles
---

# Design principles

Proto.Actor was born in the Go ecosystem, these design principles was set on day one to conform to the Go mindset.

## Constraints

### Minimalistic API
Don't bloat the API, avoid enterprisey JVM like containers and configurations.
Offload features like logging, configuration, scheduling, dependency injection to 3rd party libraries. they are not part of the core problems solved by the framework.
The API should be small and easy to use

### Build on standards
Don't try to reinvent solved problems, build on proven tech and standards.
Protobuf for serialization, gRPC Streams for network transport, Consul for cluster membership

### Message passing, not object passing
Don't try to hide serialization. 
Serialization is an explicit concern, messages should be clearly defined contracts and not arbitrary platform specific objects.

### Be fast
Don't trade performance for magic API trickery.

## Outcome

By following the above constraints, we gain some very nice benefits:

### Fast-paced development and Maintainable code
As we are mostly gluing existing blocks together, the code is easy to understand and maintain.

### Cross-platform
As we build on standards and existing tech and having a minimalistic codebase, we can easily port the framework to other platforms.
