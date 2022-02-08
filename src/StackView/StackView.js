import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import ThemeSelectsContext from "../../theme";
import IntroScreen from "../screens/IntroScreen";
import TabNavigation from "../screens/TabNavigation";

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
          name="TabNavigation"
          component={TabNavigation}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </ThemeProvider>
  );
}
