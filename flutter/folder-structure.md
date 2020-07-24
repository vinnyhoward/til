# Basic Flutter Folder Structure

`.idea` folder holds the configuration for your project for Android Studios. You don't need to touch this folder. If you do have issues with Android studios configuration, deleting this folder and restarting it might solve some or all your issues

`.vscode` holds your personal configurations for Visual Studio Code. The file `settings.json` is where your configurations are held

`android` folder is super important and holds your complete `android` code. This is the place where your Flutter SDK "merges" into the `android` code base to compile your app

`ios` folder is also super important and holds your complete `ios` code. This is the place where your Flutter SDK "merges" into the `android` code base to compile your app

`build` folder holds the compiled output code of your flutter project. This folder is generated and maintained by the flutter SDK and you should not change anything in there

`lib` folder is where you would do 90% of your work. This is where your `dart` files live.

`test` is where your tests live; obviously.

`.gitignore` is a git management file that tells your `git` file what to exclude

`metadata`, `.packages` and the `PROJECT_NAME.iml` are files that are managed by Flutter that handles internal dependencies for your project. You don't have to worry about these files.

The `pubspec.yaml` file handles your projects 3rd party dependencies, fonts and images. The `pubspec.lock` is auto created based on your `pubspec.yaml` and has more initmate details about your 3rd party dependencies.
