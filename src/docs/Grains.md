# Proto.Cluster

Proto.Cluster leverages the "Vritual Actor Model", which was pioneered by Microsoft Orleans.
Unlike the traditional Actor Model used in Erlang or Akka, where developers must care about actor lifecycles, placement and failures.
The virtual actor model instead focus on ease of use, high availability where most of the complexity have been abstracted away from the developer.

The Microsoft Orleans website describes this as *A straightforward approach to building distributed, high-scale applications in .NET*.

Proto.Actor combines this way of clustering, with the traditional actor model to combine the best of both worlds.
This allows us to create huge clusters of stateful services where the virtual actors acts as entry points which in turn can contain entire graphs of local actors.

This offers us a unique way to optimize for data locality, while still offering ease of use at scale.

Just like everything else in Proto.Actor where we have re-used proven technologies such as Protobuf and gRPC, we do the same for clustering, we do not reinvent the wheel and create our own cluster mechanics.
Instead, we leverage proven technologies such as Consul.

