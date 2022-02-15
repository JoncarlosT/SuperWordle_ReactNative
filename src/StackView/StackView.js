import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import ThemeSelectsContext from "../../theme";
import IntroScreen from "../screens/IntroScreen";
import GameScreen from "../screens/GameScreen/GameScreen";
import HowToPlayScreen from "../screens/HowToPlayScreen";

const Stack = createNativeStackNavigator();

export default function StackView() {
  const themeResources = useContext(ThemeSelectsContext);

  return (
    <ThemeProvider theme={themeResources.themeMode}>
      <Stack.Navigator>
        <Stack.Screen
          name="IntroScreen"
          component={IntroScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HowToPlayScreen"
          options={{ headerTitle: "How To Play" }}
          component={HowToPlayScreen}
        />
        <Stack.Screen
          name="GameScreen"
          component={GameScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </ThemeProvider>
  );
}
