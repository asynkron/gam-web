---
layout: docs.hbs
title: The Obligatory Hello World
---
#  The Obligatory Hello World - DotNet
This example shows how to define and consume actors in C#

## Hello World using the Golang API
#### Define a message:
```go
//define a struct for our message
type Hello struct{ Who string }
```

#### Define your actor
```go
func (state *HelloActor) Receive(context actor.Context) {
    switch msg := context.Message().(type) {
    case Hello:
        fmt.Printf("Hello %v\n", msg.Who)
    }
}
```

#### Usage:
```golang
func main() {
    props := actor.FromInstance(&HelloActor{})
    pid := actor.Spawn(props)
    pid.Tell(Hello{Who: "Roger"})
    console.ReadLine()
}
```
