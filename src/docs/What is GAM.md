---
layout: docs.hbs
title: What is GAM
---
# What is GAM?

GAM is a next generation Actor Model framework.
Over the last few years we have seen two competing aproaches of actors emerging.
First we have the classical Erlang/Akka style actors, and later came the Microsoft Orleans style *"virtual actors"* or *"Grains"*.
These two ways both yield different benefits and drawbacks.

GAM unifies both of these two ways of working under a common framework.

GAM also solves another issue, none of the pre existing actor model frameworks or languages can cmmunicate between platforms.
Picking one of the old ways of working with actors, you are locked into a specific platfor.

This is why GAM introduces "Actor Standard Protocol", a predefined contract of base primitives which can be consumed by different language implementations.
This is a game changer in the field of actor systems, you are now free to pick and chose languages for your different actor based microservices in a way never seen before.

## Scalable, distributed real-time transaction processing

We believe that writing correct, concurrent, fault-tolerant and scalable applications is too hard.

Most of the time, that's because we are using the wrong tools and the wrong level of abstraction. GAM is here to change that.

By using the Actor Model, we raise the abstraction level and provide a better platform to build scalable, resilient and responsive applications—see the [Reactive Manifesto](http://www.reactivemanifesto.org/) for more details.

For fault-tolerance we adopt the "let it crash" model, which the telecom industry has used with great success to build applications that self-heal and systems that never stop. Actors also provide the abstraction for transparent distribution and the basis for truly scalable and fault-tolerant applications.

GAM is Open Source and available under the [Apache 2 License](http://www.apache.org/licenses/LICENSE-2.0) -- [explained in plain english here](https://www.tldrlegal.com/l/apache2).

Download from https://github.com/AsynkronIT/gam.

## A unique hybrid
### Actors
Actors give you:

* Simple and high-level abstractions for concurrency and parallelism.
* Asynchronous, non-blocking and highly performant event-driven programming model.
* Very lightweight event-driven processes (several million actors per GB of heap memory).

### Fault Tolerance
* Supervisor hierarchies with "let it crash" semantics.
* Supervisor hierarchies can span over multiple virtual machines to provide truly fault-tolerant systems.
* Excellent for writing highly fault-tolerant systems that self-heal and never stop.
See [Fault Tolerance](Fault%20tolerance).

### Location Transparency
Everything in GAM is designed to work in a distributed environment: all interactions of actors use pure message passing and everything is asynchronous.
