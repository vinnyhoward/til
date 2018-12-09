# Context

Typical React applications pass down data at least one level down if not more, to its children. If the layers of children exceed more then just a few children Passing data can be cumbersome and if often referred to as ```Prop Drilling```, where the data needed is constantly drilled down to wheres its needed. Libraries such as ```redux``` were built to solve this problem and allows state to be global, but redux's boilerplate can also be cumbersome to set up if only one or two values are needed globally. In order to solve this issue we use React's ```Context``` API.

## Before using Context

Context is mostly used for data to be accessed by many components at different nested levels. Apply it sparingly because it can make component reuse more difficult.

## React.createContext

```
const MyContext = React.createContext(defaultValue);
```

```Context``` creates an object where React renders a component that subscribes to this ```Context``` object. It will read the current context value from the closest matching ```Provider``` above it in the tree.

The ```defaultValue``` argument is only used when a component does not have the matching ```Provider``` above it in the tree. This can be helpful for testing components in isolation without wrapping them.

## Context.Provider

```
<MyContext.Provider value={/* some value */}>
```

Every Context object comes with a Provider React components that allows consuming components to subscribe to context changes.

```Context``` accepts a ```value``` prop to be passed down to its consuming components. One ```Provider``` can be connected to several consumers. ```Providers``` can be nested to override values deeper within the tree.

Example: 

```
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);
```

```
import {ThemeContext} from './theme-context';

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{backgroundColor: theme.background}}
      />
    );
  }
}
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
```

```
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';

// An intermediate component that uses the ThemedButton
function Toolbar(props) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    // The ThemedButton button inside the ThemeProvider
    // uses the theme from state while the one outside uses
    // the default dark theme
    return (
      <Page>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <Section>
          <ThemedButton />
        </Section>
      </Page>
    );
  }
}

ReactDOM.render(<App />, document.root);
```