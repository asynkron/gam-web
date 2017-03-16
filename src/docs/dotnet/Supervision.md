---
layout: docs.hbs
title: Supervision
---

# Supervision

When an actor spawns child actors, it is responsible for handling errors that occur in it's child actors. When a child actor fails to process a message and throws an exception, the failure is escalated to the parent, which then decides what action to perform on the actor. If the parent is unable to handle the error, it can choose to escalate it further to it's own parent.

The supervisor can choose one of four so-called supervisor directives:
* **Resume** - resumes the actor immediately
* **Restart** - stops the actor and re-creates it before resuming it
* **Stop** - stops the actor without resuming it
* **Escalate** - escalates the error to the supervisor's parent

