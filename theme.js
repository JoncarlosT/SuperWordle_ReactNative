import { createContext, useState } from "react";

const ThemeSelectsContext = createContext();

const ThemeSelectsContextProvider = (props) => {
  const AppTheme = {
    dark: {
      backgroundColor: "#000000",
      fontColor: "white",
      letterCorrect: "#0b8457",
      letterInWord: "#eac100",
      letterNotInWord: "#3e3636",
    },

    light: {
      backgroundColor: "#dee1ec",
      fontColor: "black",
      letterCorrect: "#0b8457",
      letterInWord: "#eac100",
      letterNotInWord: "#3e3636",
    },
  };

  const [lightMode, setLightMode] = useState(true);

  const changeTheme = () => {
    setLightMode(!lightMode);
  };

  return (
    <ThemeSelectsContext.Provider
      value={{
        themeMode: lightMode ? AppTheme.light : AppTheme.dark,
        changeTheme,
      }}
    >
      {props.children}
    </ThemeSelectsContext.Provider>
  );
};

export default ThemeSelectsContext;
export { ThemeSelectsContextProvider };
