# Flutter Architecture

The core concept of the Flutter framework is in Flutter, everything is a widget. Widets are basically user interface components sued to create the user interface of the appliation.

In Flutter, the application is itself a widget. The application is the top-level widget and its UI is built using one or more children (widgets), which again build using its children widgets. This composability feature helps us to create a user interface of any complexity.

For example, the widget hierarchy of the hello world application (created in previous chapter) is as specified in the following diagram:

![flutter architecture](https://www.tutorialspoint.com/flutter/images/hello_world_application.jpg)

Here the following points are worth notable:

-   `MyApp` is the user created widget and it is build using the Flutter native widget, `MaterialApp`

-   `MaterialApp` has a home property to specify the user interface of the home page, which is again a user created widget, `MyHomePage`

-   `MyHomePage` is built using another flutter native widget, `Scaffold`

-   `Scaffold` has two properties – `body` and `appBar`

-   `body` is used to specify its main user interface and `appBar` is used to specify its header user interface

-   `Header` UI is built using flutter native widget, `AppBar` and Body UI is built using Center widget.
