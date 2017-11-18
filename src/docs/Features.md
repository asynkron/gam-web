---
layout: docs.hbs
title: Features
---

# Mailbox

## Message processing

## Concurrency

- Message posting can be done concurrently
- Message receive is done sequentially

### Queues

Proto Actor provides two implementations of mailbox queues - an unbounded and a bounded. The unbounded queue is useful for X. The bounded queue is useful for Y.

### Dispatchers and invokers

The mailbox requires two handlers to be registered, a dispatcher and an invoker. When an actor is spawned, the invoker will be the actor context, and the dispatcher is taken from the Props.

#### Mailbox invoker

When the mailbox pops a message from the queue, it hands over the message to the registered invoker to actually handle the message. For an actor, the actor's context will get the message and invoke the actor's receive method for processing. If an error occurs while the message is being processed, the mailbox will escalate the error to its registered invoker, so that it can take the appropriate action (e.g. restart the actor) and continue if possible.

#### Mailbox dispatchers

When the mailbox gets a message, it will schedule itself to process messages that are in the mailbox queues, using the dispatcher. The dispatcher is responsible for actually scheduling the processing to be run. The implementation of this varies by platform, e.g. in Go it is a simple invocation of a goroutine, whereas in C# the processing is handled by registering a Task to be run on the thread pool. The dispatcher is also responsible for limiting the throughput on each mailbox run. The mailbox will pick messages one by one in a single thread. By limiting the throughput of each run, the thread in use can be released so that other mailboxes can get scheduled to run.

## Statistics

- User messages
- System messages
- Started event
- Empty event

# Actor

## Features

- Create actor from function/method
- Create actor from object factory
- Spawn actor with automatic/prefixed/specific name

# Props

## Settings

- Actor producer
- Mailbox producer
- Supervisor strategy
- Dispatcher
- Actor spawner
- Middleware

# Context

## Data

- Parent PID
- Self PID
- Sender PID
- Children PIDs
- Current message
- Current Actor

## Features

- Respond to sender
- Stash current message pending restart
- Spawn child actor with automatic/prefixed/specific name
- Stop/restart/resume children
- Set/push/pop actor behaviors (become/unbecome)
- Watch/unwatch actors
- Receive timeout 

# ProcessRegistry

- Get Process by PID
- Add local Process with ID
- Remove Process by PID
- Generate next Process ID

# Process

- Send user message to Process
- Send system message to Process
- Stop Process

# Supervision

## Directives

- Resume
- Restart
- Stop
- Escalate

## Strategies

- OneForOneStrategy applies directive to failed child

# PID

## Features

- Holds address (nonhost or remote address) and ID
- Send user message
- Send system message
- Request
- Request future
- Stop

# Future process

- Auxiliary process used to provide an awaitable future containing the response to a request

# Dead letter process

- Auxiliary process used to collect messages sent to non-existing processes

# Routers

- Group routers route message to a specified set of routees
- Pool routers route messages to a set of routees of a specified size, and are created/managed by the router
- Broadcast routers routes a message to all routees
- Random routers routes a message to a random routee
- Consistent-hash routers routes a message to a routee deterministically
- Round-robin routers routes messages to routees in a round-robin fashion

## Consistent hash routers

- Routing is deterministic based on a hash computed by the message
- Uses a hash ring so that if a routee is unavailable, another will be chosen automatically, and when the routee is back it will be used again

## Broadcast routers

- Uses a special message RouterBroadcastMessage to route messages more efficiently when the routees are remote (?)

## Management messages

- Add route
- Get routees
- Remove routee

# Remote

- Remote.Start() starts a remote actor server on a given address
- RemoteProcess represents an actor on a remote actor server
- Remote actors can be watched
- EndpointWriter mailbox collects batches of messages to optimize sending