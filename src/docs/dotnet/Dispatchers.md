---
layout: docs.hbs
title: Dispatchers
---

# Dispatchers

Dispatchers are responsible for scheduling the [Mailboxes](Mailbox) to dequeue messages and send them to the actor, and to control the throughput of the mailbox.

By default, all actors share a singleton `ThreadPoolDispatcher` with a throughput of 300 messages per mailbox run.

## ThreadPoolDispatcher

The `ThreadPoolDispatcher` uses the built-in `TaskFactory` to schedule mailbox runs on the standard .NET thread pool.

## CurrentSynchronizationContextDispatcher

The `CurrentSynchronizationContextDispatcher` works the same way as the `ThreadPoolDispatcher`, but uses the current `SynchronizationContext` as the `TaskScheduler`. This dispatcher is useful if you are running Proto.Actor in a desktop GUI application.