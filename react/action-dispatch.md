# Actions and Dispatch

`actions` are payloads of information that send data from your application to your store. They are the only source of information for the store. You send them to the store using `dispatch()`.

`actions` are plain JavaScript objects. Actions must have a `type` property that indicates the type of `action` being performed. Types should typically be defined as string constants. Once your app is large enough, you may want to move them into a separate module.

Other than `type`, the structure of an action object is really up to you. If you're interested, check out `Flux Standard Action` for recommendations on how actions could be constructed. Which basically sets the standard the the second argument of an action is the `payload`.

Here's an example action which represents adding a new todo item:

```js
const addGrudge = ({ person, reason }) => {
    dispatch({
        type: ADD,
        payload: {
            person,
            reason,
            forgiven: false,
            id: id(),
        },
    });
};
```
