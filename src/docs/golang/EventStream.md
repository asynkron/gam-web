---
layout: docs.hbs
title: EventStream
---
# EventStream

The EventStream is used internally in Proto.Actor to broadcast framework events.

## actor.DeadLetter

When a message is sent to a non existing `PID`, the message will be forwarded to the `EventStream` as a `DeadLetter`.
This can be used to monitor if your system holds on to broken/expired `PID`s

## remoting.EndpointTerminated

When an endpoint terminates, the remoting layer will send a `EndpointTerminated` event.
This can be used if you need to know about your current network topology.
This event is also used to trigger `Terminate` events for remote watched actors.

## cluster.MemberStatusBatch, cluster.MemberStatusEvent

### Usages

#### Cluster Provider
In clustering, the `ClusterProvider`s broadcast `cluster.MemberStatusBatch` messages to inform the system about the current cluster topology.

#### MemberListActor
The member list actor use the `cluster.MemberStatusBatch` to calculate a delta of topology changes and refine this information into `cluster.MemberStatusEvent` messages.

#### PartitionActor
The `cluster.MemberStatusEvent` messages are handled by the `cluster.PartitionActor`'s to determine if virtual actor ownership should be handed over to other nodes.
