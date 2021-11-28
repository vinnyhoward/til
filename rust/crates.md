# Packages and Crates

 A crate is a binary or library. The crate root is a source file that the Rust compiler starts from and makes up the root module of your crate. A package is one or more crates that provide a set of functionality. A package contains a Cargo.toml file that describes how to build those crates. Several rules determine what a package can contain. A package can contain at most one library crate. It can contain as many binary crates as you’d like, but it must contain at least one crate (either library or binary).

A crate is a compilation unit in Rust. Whenever `rustc some_file.rs` is called, `some_file.rs` is treated as the crate file. If `some_file.rs` has mod declarations in it, then the contents of the module files would be inserted in places where mod declarations in the crate file are found, before running the compiler over it. In other words, modules do not get compiled individually, only crates get compiled.

A crate can be compiled into a binary or into a library. By default, `rustc` will produce a binary from a crate. This behavior can be overridden by passing the `--crate-type` flag to `lib`.

A crate is synonymous with a ‘library’ or ‘package’ in other languages. Hence “Cargo” as the name of Rust’s package management tool: you ship your crates to others with Cargo. Crates can produce an executable or a library, depending on the project.

Each crate has an implicit root module that contains the code for that crate. You can then define a tree of sub-modules under that root module. Modules allow you to partition your code within the crate itself.

As an example, let’s make a phrases crate, which will give us various phrases in different languages. To keep things simple, we’ll stick to ‘greetings’ and ‘farewells’ as two kinds of phrases, and use English and Japanese (日本語) as two languages for those phrases to be in. We’ll use this module layout: