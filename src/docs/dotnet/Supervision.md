---
layout: docs.hbs
title: Supervision
---

# Supervision

When an actor spawns child actors, it is responsible for handling errors that occur in it's child actors. When a child actor fails to process a message and throws an exception, the failure is escalated to the parent, which then decides what action to perform on the actor. If the parent is unable to handle the error, it can choose to escalate it further to it's own parent.

## Directives

* **Resume** - resumes the actor immediately
* **Restart** - stops the actor and re-creates it before resuming it
* **Stop** - stops the actor without resuming it
* **Escalate** - escalates the error to the supervisor's parent

## Strategies

The default supervision strategy is the one-for-one strategy.

```csharp
public static ISupervisorStrategy DefaultStrategy { get; } = new OneForOneStrategy((who, reason) => SupervisorDirective.Restart, 10, TimeSpan.FromSeconds(10));
```

### One-for-one strategy

When an actor has multiple children and one of them fails, the one-for-one strategy will apply the supervisor directive only to the failing actor. The strategy takes three parameters: a `Decider` that decides which directive to apply, the maximum number of times to restart, and a `TimeSpan` that limits how often an actor may fail until it will be stopped instead of restarted.

For example, for the default strategy described above, each restart will count towards a restart counter if less than 10 seconds passed in-between two consecutive restarts. When the counter reaches 10, the actor will be stopped instead. If more than 10 seconds passes in-between two consecutive restarts, the counter is reset. In other words, the actor will be restarted until 10 consecutive restarts have been done with less than 10 seconds between each, after which the actor will be stopped.