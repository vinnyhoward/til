# Dart Type System

The Dart language is type safe: it uses a combination of static type checking and `runtime checks` to ensure that a variable’s value always matches the variable’s static type, sometimes referred to as sound typing. Although types are mandatory, type annotations are optional because of `type inference`.

One benefit of static type checking is the ability to find bugs at compile time using Dart’s `static analyzer`.

Static analysis allows you to find problems before executing a single line of code. It’s a powerful tool used to prevent bugs and ensure that code conforms to style guidelines.

With the help of the analyzer, you can find simple typos. For example, perhaps an accidental semicolon made its way into an if statement.
