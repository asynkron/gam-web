---
layout: docs.hbs
title: The Obligatory Hello World
---
#  The Obligatory Hello World
This example shows how to define and consume actors in both C# and F#

## Hello World using the C# API
#### Define a message:
```csharp
// Create an (immutable) message type that your actor will respond to
public class Greet
{
    public Greet(string who)
    {
        Who = who;
    }
    public string Who { get;private set; }
}
```
#### Define your actor using the `ReceiveActor` API
```csharp
// Create the actor class
public class GreetingActor : ReceiveActor
{
    public GreetingActor()
    {
        Receive<Greet>(greet => Console.WriteLine("Hello {0}", greet.Who));
    }
}


#### Usage:
```csharp
// Create a new actor system (a container for your actors)
var system = ActorSystem.Create("MySystem");

// Create your actor and get a reference to it.
// This will be an "IActorRef", which is not a reference to the actual actor
// instance but rather a client or proxy to it.
var greeter = system.ActorOf<GreetingActor>("greeter");

// Send a message to the actor.
greeter.Tell(new Greet("World"));

// This prevents the app from exiting
// before the async work is done.
Console.ReadLine();
```
