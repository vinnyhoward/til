# Format

Creates a `String` using interpolation of runtime expressions.

The first argument `format!` receives is a format string. This must be a string literal. The power of the formatting string is in the `{}s` contained.

Additional parameters passed to format! replace the `{}s` within the formatting string in the order given unless named or positional parameters are used.

A common use for `format!` is concatenation and interpolation of strings. The same convention is used with `print!` and `write!` macros, depending on the intended destination of the string.

To convert a single value to a string, use the `to_string` method. This will use the `Display` formatting trait.