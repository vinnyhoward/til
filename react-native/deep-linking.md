# Linking or Deep Linking

Linking gives you a general interface to interact with both incoming and outgoing app links.

## Basic Usage

### Handling deep links

If your app was launched from an external url registered to your app you can access and handle it from any component you want with

```
componentDidMount() {
  Linking.getInitialURL().then((url) => {
    if (url) {
      console.log('Initial url is: ' + url);
    }
  }).catch(err => console.error('An error occurred', err));
}
```

### Methods

- constructor

```
constructor();
```

- addEventListener

```
addEventListener(type, handler);
```

Add a handler to Linking changes by listening to the url event type and providing the handler

- removeEventListener

```
removeEventListener(type, handler);
```

Remove a handler by passing the url event type and the handler

- openURL

```
openURL(url);
```

The method returns a Promise object. If the user confirms the open dialog or the url automatically opens, the promise is resolved. If the user cancels the open dialog or there are no registered applications for the url, the promise is rejected.

- canOpenURL

```
canOpenURL(url);
```

Determine whether or not an installed app can handle a given URL.

The method returns a Promise object. When it is determined whether or not the given URL can be handled, the promise is resolved and the first parameter is whether or not it can be opened.

- getInitialURL

```
getInitialURL();
```

If the app launch was triggered by an app link, it will give the link url, otherwise it will give null
