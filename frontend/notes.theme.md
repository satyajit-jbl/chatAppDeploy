# Chanding theme from Daisy ui
- update the tailwind.config.js, add the following code under plugins
```js
daisyui:{
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
  ```
  - edit index.html , add data-theme="retro" for selecting sepecific theme
  ```js
  <html lang="en" data-theme="retro">
  ```

  # But we can do it dynamically in UI from settings
  - create a index.js component in src/constants

  ```js
  export const THEMES = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];
  ```
  - useThemeStore.js
  ```js
  import { create } from "zustand";

export const useThemeStore = create((set)=>({
    theme: localStorage.getItem("chat-theme") || "coffee",
    setTheme: (theme) => {
        localStorage.setItem("chat-theme", theme);
        set({theme})
    },
}));
```
- App.jsx

```js
import { useThemeStore } from "./store/useThemeStore"
  const {theme} = useThemeStore();
  .
  .
  return (
    <div data-theme={theme}>
  )
  ```

  - Now theme already changes to "coffee" , now we store theme local storage

  - now add the SettingsPage.jsx 
  
