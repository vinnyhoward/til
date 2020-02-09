# useContext

```js
const value = useContext(MyContext);
```

Accepts a context object (the value returned from ```React.createContext```) and returns the current context value for that context. The current context value is determined by the value prop of the nearest ```<MyContext.Provider>``` above the calling component in the tree.

Don’t forget that the argument to useContext must be the context object itself:

- Correct: useContext(MyContext)

- Incorrect: useContext(MyContext.Consumer)

- Incorrect: useContext(MyContext.Provider)

A component calling `useContext` will always re-render when the context value changes. If re-rendering the component is expensive, you can optimize it by using `memoization`.

```js
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
```