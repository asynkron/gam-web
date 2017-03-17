---
layout: docs.hbs
title: Behaviors
---

# Behaviors

Actors can change their behavior at any time. This is done by means of switching the default `Receive` method for a different one.

## Changing behaviors

There are three methods available for changing behaviors:

* `SetBehavior` simply sets the passed `Receive` method as the current behavior, replacing the default method.
* `PushBehavior` pushes the passed `Receive` method onto the behavior stack, but preserves the previous behavior.
* `PopBehavior` reverts to the previously used behavior.

### Example: Set behavior

This example shows how to simply set the behavior.

```csharp
public Task Receive(IContext ctx)
{
    ctx.SetBehavior(Receive2);
}

public Task Receive2(IContext ctx)
{
    ctx.SetBehavior(Receive);
}
```

### Example: Push/pop behavior

This example shows how to push and pop behaviors. When the actor pops the behavior in `Receive2` it reverts back to `Receive`.

```csharp
public Task Receive(IContext ctx)
{
    ctx.PushBehavior(Receive2);
}

public Task Receive2(IContext ctx)
{
    ctx.PopBehavior(); // behavior will revert back to Receive
}
```
