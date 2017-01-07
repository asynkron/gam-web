---
layout: docs.hbs
title: Design Goals
---

# Design principles:

**Minimalistic API** -
The API should be small and easy to use.
Avoid enterprisey JVM like containers and configurations.

**Build on existing technologies** - There are already a lot of great tech for e.g. networking and clustering, build on those.
e.g. gRPC streams for networking, Consul.IO for clustering.

**Message Passing, not Object Passing** - Serialization is an explicit concern, don't try to hide it.
Protobuf all the way.

**Be Fast** - Do not trade performance for magic API trickery.

Ultra fast remoting, Proto Actor currently manages to pass over **two million messages per second** between nodes using only two actors, while still preserving message order!
This is six times more the new super advanced UDP based Artery transport for Scala Akka, and 30 times faster than Akka.NET.

```text
:> node1.exe
2016/12/02 14:30:09 50000
2016/12/02 14:30:09 100000
2016/12/02 14:30:09 150000
... snip ...
2016/12/02 14:30:09 900000
2016/12/02 14:30:09 950000
2016/12/02 14:30:10 1000000
2016/12/02 14:30:10 Elapsed 999.9985ms
2016/12/02 14:30:10 Msg per sec 2000003 <--
```
