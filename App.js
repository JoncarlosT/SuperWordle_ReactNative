import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import StackView from "./src/StackView";
import { ThemeSelectsContextProvider } from "./theme";
export default function App() {
  return (
    <ThemeSelectsContextProvider>
      <NavigationContainer>
        <StackView />
      </NavigationContainer>
    </ThemeSelectsContextProvider>
  );
}
