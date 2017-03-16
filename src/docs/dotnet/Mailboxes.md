---
layout: docs.hbs
title: Mailboxes
---

# Mailboxes

In Proto.Actor, Mailboxes hold messages that are destined for an actor. When you send a message to an actor, the message doesn't go directly to the actor, but goes to the actor's mailbox until the actor gets time to process it.

The default mailbox consists of two queues of messages: system messages and user messages. The system messages are used internally by the Actor Context to suspend and resume mailbox processing in case of failure. System messages are also used by internally to manage the Actor, e.g. starting, stopping and restarting it. User messages are sent to the actual Actor.

Messages in the mailbox will always be delivered in FIFO order, with one exception: if there are any system messages they will always be processed before any user messages.

## Changing the mailbox

To use a specific mailbox implementation, you can customize the Props:

```csharp
var props = Actor.FromProducer(() => new MyActor())
    .WithMailbox(() => UnboundedMailbox.Create());
```

#### Built-in mailboxes

* **UnboundedMailbox**  
  This is the default mailbox used by Proto.Actor. It's a non-blocking unbounded mailbox, and should be good enough for most cases.

## Mailbox statistics

Mailbox statistics provides an extension point to get notifications of the following mailbox events: MailboxStarted, MailboxEmpty, MessagePosted, MessageReceived.

```csharp
var props = Actor.FromProducer(() => new MyActor())
    .WithMailbox(() => UnboundedMailbox.Create(myMailboxStatistics1, myMailboxStatistics2));
```