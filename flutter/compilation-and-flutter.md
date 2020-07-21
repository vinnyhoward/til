# Compilation and Flutter

Using the Dart language allows Flutter to compile the source code ahead-of-time to native code. The engine’s C/C++code is compiled with Android’s NDK or iOS’ LLVM. Both pieces are wrapped in a “runner” Android and iOS project, resulting in an apk or ipa file respectively. On app launch, any rendering, input, or event is delegated to the compiled Flutter engine and app code. Having to package the engine with the app’s apk/ipa file currently leads to an increased app size of 4MB.

Fast startup and execution of an app are the benefits of compilation to native code. The UI is refreshed at 60fps – mostly using the GPU – and every pixel on the screen is owned by the Skia canvas which leads to a smooth, highly customizable UI.

![flutter compiled](https://i.ibb.co/Br8hg5M/Screen-Shot-2020-07-20-at-10-46-16-PM.png)

## Why Flutter uses Dart

The Dart language is crucial for Flutter’s success.

-   Dart is ahead-of-time (AOT) compiled into fast native X86 or ARM code for Android and iOS devices.

-   Additionally, Dart can be just-in-time (JIT) compiled. This comes in handy during the development phase. It enables Flutter’s sub-second hot reload – which is significantly faster than Android’s Instant Run.

-   Flutter uses Dart 2 – a garbage-collected, object-oriented language with a sound type system and type inferencing.

-   Dart is single-threaded and does not allow preemptive scheduling nor shared memory. Hence, garbage collection is extremely fast and memory locks are not required. Threads explicitly yield using e.g. async/await. For Android and iOS, “a dedicated thread is created for the UI, GPU and IO task runners per engine instance. All engine instances share the same platform thread and task runner.”

-   Dart has great tooling and IDE support in IntelliJ, Android Studio, and Visual Studio Code.

-   Dart has a fast-growing community and an extensive set of libraries and packages that can be used in Flutter apps. Find them on Dart’s package manager.

-   Dart is very easy to learn for any developer – no matter if him/her background is C, Java, Kotlin, Swift, JS, Ruby, etc. Some organizations claim that with Flutter it is much easier to hire skilled developers because their background does not matter as much. In contrast, I hear a lot of Android and iOS developers struggling with e.g. React Native at first – as they feel it’s more tailored towards web developers.

## Flutter and primitives

![flutter and primitives](https://i.ibb.co/NKbTvwD/Screen-Shot-2020-07-20-at-10-55-34-PM.png)
