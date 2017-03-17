---
layout: docs.hbs
title: Receive timeout
---
## Receive timeout

<!--The `Context.SetReceiveTimeout` defines the inactivity timeout after which the sending of a `ReceiveTimeout` message is triggered. When specified, the receive function should be able to handle an `ReceiveTimeout` message.

>**Note**<br/>
>Please note that the receive timeout might fire and enqueue the ReceiveTimeout message right after another message was enqueued; hence it is not guaranteed that upon reception of the receive timeout there must have been an idle period beforehand as configured via this method.

Once set, the receive timeout stays in effect (i.e. continues firing repeatedly after inactivity periods). Pass in `nil` / `null` to `SetReceiveTimeout` to switch off this feature.

```go

```-->