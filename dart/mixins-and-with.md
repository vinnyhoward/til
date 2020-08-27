# With

Adding features to a class: `mixins`

`Mixins` are a way of reusing a class’s code in multiple class hierarchies.

To use a mixin, use the `with` keyword followed by one or more `mixin` names. The following example shows two classes that use `mixins`:

```dart
class Musician extends Performer with Musical {
  // ···
}

class Maestro extends Person
    with Musical, Aggressive, Demented {
  Maestro(String maestroName) {
    name = maestroName;
    canConduct = true;
  }
}
```

To implement a mixin, create a class that extends Object and declares no constructors. Unless you want your mixin to be usable as a regular class, use the mixin keyword instead of class. For example:

```dart
mixin Musical {
  bool canPlayPiano = false;
  bool canCompose = false;
  bool canConduct = false;

  void entertainMe() {
    if (canPlayPiano) {
      print('Playing piano');
    } else if (canConduct) {
      print('Waving hands');
    } else {
      print('Humming to self');
    }
  }
}
```

To specify that only certain types can use the mixin — for example, so your mixin can invoke a method that it doesn’t define — use on to specify the required superclass:

```dart
mixin MusicalPerformer on Musician {
  // ···
}
```
