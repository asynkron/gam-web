---
layout: docs.hbs
title: Mailboxes
---

# Mailboxes

## What Mailboxes Do?

In Proto.Actor, Mailboxes hold messages that are destined for an actor. When you send a message to an actor, the message doesn't go directly to the actor, but goes to the actor's mailbox until the actor has time to process it.

A mailbox can be described as a queue of messages. Messages are usually then delivered from the mailbox to the actor one at a time in the order they were received, but there are implementations like the [Priority Mailbox](#unboundedprioritymailbox) that can change the order of delivery.

### Using a Mailbox

To make an actor use a specific mailbox, you can set it up the following way:

1. In the actor's props
## Go
```go
props := actor.FromProducer(MyActorProducer).WithMailbox(MyMailboxProducer)
```

### Built-in Mailboxes

* UnboundedMailbox
* UnboundedLockfreeMailbox
* BoundedMailbox