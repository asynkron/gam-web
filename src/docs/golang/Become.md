---
layout: docs.hbs
title: Switchable Behaviors
---

# Switchable Behaviors

Actors have the power to switch their behaviors at any point in time. This is usually referred as *becoming something*, as in *the actor becomes busy* or *the actor becomes connected*.

This is accomplished by replacing the method that handles messages inside the actor using `Become` or `BecomeStacked`. These methods accept a delegate that will handle the next messages until you decide to replace it again.

> **Note:**<br /> When you change the actor behavior, the new behaviour will take effect for all subsequent messages until the behaviour is changed again. The current message will continue processing with the existing behaviour. You can use [Stashing](Stashing Messages) to reprocess the current message with the new behavior.

## API

The API to change behaviors is available to the actor instance is very simple:

* `Become` - Replaces the message handler with the specified delegate;
* `BecomeStacked` - Adds the specified message handler to the top of the behavior stack, while maintaining the previous ones;
* `UnbecomeStacked` - Reverts to the previous message handler from the stack (only works with BecomeStacked);

The example below shows how to switch behaviors using `Become`:

```gol
func (state *BecomeActor) Receive(context actor.Context) {
    switch msg := context.Message().(type) {
    case Hello:
        fmt.Printf("Hello %v\n", msg.Who)
        context.Become(state.Other)
    }
}

func (state *BecomeActor) Other(context actor.Context) {
    switch msg := context.Message().(type) {
    case Hello:
        fmt.Printf("%v, ey we are now handling messages in another behavior", msg.Who)
        context.Become(state.Receive)
    }
}
```

The example below shows how to accomplish the same goal using `BecomeStacked/UnbecomeStacked`:

```cs
func (state *BecomeActor) Receive(context actor.Context) {
    switch msg := context.Message().(type) {
    case Hello:
        fmt.Printf("Hello %v\n", msg.Who)
        context.BecomeStacked(state.Other)
    }
}

func (state *BecomeActor) Other(context actor.Context) {
    switch msg := context.Message().(type) {
    case Hello:
        fmt.Printf("%v, ey we are now handling messages in another behavior", msg.Who)
        context.UnbecomeStacked()
    }
}
```

As you can see, the difference is that `BecomeStacked` preserves the old behavior, so you can just call `UnbecomeStacked` to go back to the previous behavior. The preference of one over the other depends on your needs. You can call `BecomeStacked` as many times as you need, and you can call `UnbecomeStacked` as many times as you called `BecomeStacked`. Additional calls to `UnbecomeStacked` won't do anything if the current behavior is the only one in the stack.

## Understanding Behaviors

Actors always have a default behavior. This behavior is whatever logic you defined first in your actor. When actors switch behaviors, they are just switching the methods they use to handle messages by default.

For example:

```go
func (state *BecomeActor) Receive(context actor.Context) {
    fmt.Println("Ping")
    context.BecomeStacked(func(ctx actor.Context)
    {
        fmt.Println("Pong")
        ctx.UnbecomeStacked()
    })
}
```

Although the syntax of the methods are simple, it may not be clear at first how it behaves in practice. If you are used to other frameworks, it may look like the message will always be handled by `OnReceive`, always writing `Ping` to the console and switching to another behavior that is never actually called.

But that's not what happens. As you can see in the demo below, this code switches between `Ping` and `Pong` as expected.

The trick here is that Proto.Actor internally calls `Become(actor.Receive)` when the actor is created, making that the default behavior. So, when you call `BecomeStacked(...)`, you are just replacing that behavior. This sample is created using UntypedActor, but the same is true for any other actor.

