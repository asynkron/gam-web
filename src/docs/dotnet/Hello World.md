---
layout: docs.hbs
title: The Obligatory Hello World
---
#  The Obligatory Hello World
This example shows how to define and consume actors in C#

## Hello World using the C# API
#### Define a message:
```csharp
class Hello
{
    public string Who;
}
```

#### Define your actor
```csharp
class HelloActor : IActor
{
    public Task ReceiveAsync(IContext context)
    {
        var msg = context.Message;
        if (msg is Hello r)
        {
            Console.WriteLine($"Hello {r.Who}");
        }
        return Actor.Done;
    }
}
```

#### Usage:
```csharp
var props = Actor.FromProducer(() => new HelloActor());
var pid = Actor.Spawn(props);
pid.Tell(new Hello
{
    Who = "Alex"
});
```
