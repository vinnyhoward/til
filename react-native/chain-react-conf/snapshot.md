# Screenshot Testing

## Percy

Screenshot testing for web apps and react native `@percy/appium-wd`

Compares screenshots and highlighting where they are different.

- Good for testing/QA
- Knowing where the changes you have made, and unintentionally changed.
- When comparing, if you accept the image as being what you want. It makes it the new reference image

```
test("home screen), async () => {
    await drive.init
}
```

Can integrate with Github as part of PR request