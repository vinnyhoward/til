# Extending a Class

use `extends` to create a subclass, and super to refer to the superclass:

```dart
class Television {
  void turnOn() {
    _illuminateDisplay();
    _activateIrSensor();
  }
  // ···
}


class SmartTelevision extends Television {
  void turnOn() {
    super.turnOn();
    _bootNetworkInterface();
    _initializeMemory();
    _upgradeApps();
  }
  // ···
}
```

## Overriding members

Subclasses can override instance methods, getters, and setters. You can use the `@override` annotation to indicate that you are intentionally overriding a member:

```dart
class SmartTelevision extends Television {
  @override
  void turnOn() {...}
  // ···
}
```

To narrow the type of a method parameter or instance variable in code that is `type safe`, you can use the `covariant` keyword.
