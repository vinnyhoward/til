# The main() function

Every app must have a top-level `main()` function, which serves as the entry point to the app. The `main()` function returns void and has an optional `List<String>` parameter for arguments.

Here’s an example of the `main()` function for a web app:

```dart
void main() {
  querySelector('#sample_text_id')
    ..text = 'Click me!'
    ..onClick.listen(reverseText);
}
```

Here’s an example of the `main()` function for a command-line app that takes arguments:

```dart
// Run the app like this: dart args.dart 1 test
void main(List<String> arguments) {
  print(arguments);

  assert(arguments.length == 2);
  assert(int.parse(arguments[0]) == 1);
  assert(arguments[1] == 'test');
}
```
