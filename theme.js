import { createContext, useState } from "react";
import { Dimensions, Platform, PixelRatio } from "react-native";

const ThemeSelectsContext = createContext();

const ThemeSelectsContextProvider = (props) => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
    Dimensions.get("window");
  const scale = SCREEN_WIDTH / 320;

  const normalize = (size) => {
    const newSize = size * scale;
    if (Platform.OS === "ios") {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) + "px";
    } else {
      return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2 + "px";
    }
  };

  const fontSize = {
    xmini: normalize(8),
    mini: normalize(12),
    small: normalize(15),
    medium: normalize(17),
    large: normalize(20),
    xlarge: normalize(24),
    xxlarge: normalize(28),
    xxxlarge: normalize(32),
  };

  const dark = {
    backgroundColor: "#000000",
    fontColor: "white",
    letterCorrect: "#0b8457",
    letterInWord: "#eac100",
    letterNotInWord: "#3e3636",
    fontSize: fontSize,
  };

  const light = {
    backgroundColor: "#dee1ec",
    fontColor: "black",
    letterCorrect: "#0b8457",
    letterInWord: "#eac100",
    letterNotInWord: "#3e3636",
    fontSize: fontSize,
  };

  const AppTheme = {
    dark: dark,
    light: light,
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
        fontSize: AppTheme.fontSize,
      }}
    >
      {props.children}
    </ThemeSelectsContext.Provider>
  );
};

export default ThemeSelectsContext;
export { ThemeSelectsContextProvider };
