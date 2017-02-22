---
layout: docs.hbs
title: Performance
---

# Performance and Benchmarks

| Test             | Proto.Actor C#   | Proto.Actor Go    | Akka.NET            |
| ---------------- | ----------------:| -----------------:| -------------------:|
| Remote PingPong  | ~2.5 mil msg/sec |  ~2.4 mil msg/sec | ~50k msg/sec        |
| Inproc PingPongv | ~90 mil msg/sec  |  ~120 mil msg/sec | ~20 mil msg/sec     |
| SkyNet           | ~0.9 sec         |  ~1.5 sec         | 15 sec              |
