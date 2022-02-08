import { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import ThemeSelectsContext from "../../../theme";
import {
  IntroScreenView,
  HeaderDescription,
  HowToText,
  NavigationButton,
} from "./styles";

export default function IntroScreen({ navigation }) {
  const themeResources = useContext(ThemeSelectsContext);

  return (
    <IntroScreenView>
      <StatusBar style="auto" />
      <HeaderDescription>
        <HowToText>How To Play</HowToText>
        <HowToText>Guess the WORDLE in 6 tries.</HowToText>
        <HowToText>
          Each guess must be a valid 5 letter word. Hit the enter button to
          submit.
        </HowToText>
        <HowToText>
          After each guess, the color of the tiles will change to show how close
          your guess was to the word.
        </HowToText>
      </HeaderDescription>
      <NavigationButton
        title="Go to TabNavigation"
        onPress={() => navigation.navigate("TabNavigation")}
      />
      <NavigationButton
        title="Change theme"
        onPress={() => themeResources.changeTheme()}
      ></NavigationButton>
    </IntroScreenView>
  );
}
