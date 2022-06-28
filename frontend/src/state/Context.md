# Context

defined in Theme.ts
```tsx
export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
});
```

provided in Body.tsx
```tsx
<MyContext.Provider value={/* some value */}>
```

consumed in Avatar.tsx
```tsx
<MyContext.Consumer>
  {({theme, _}) => /* render something based on the context value */}
</MyContext.Consumer>
```

updated from ThemeToggler.tsx
```tsx
function ThemeTogglerButton() {
    The Theme Toggler Button receives not only the theme
    but also a toggleTheme function from the context
    return (
      <ThemeContext.Consumer>
        {({theme, toggleTheme}) => (
          <button
            onClick={toggleTheme}
            style={{backgroundColor: theme.background}}>
            Toggle Theme
          </button>
        )}
      </ThemeContext.Consumer>
    );
}
```