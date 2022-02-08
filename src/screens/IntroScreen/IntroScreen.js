import { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import ThemeSelectsContext from "../../../theme";
import { Dimensions } from "react-native";
import {
  IntroScreenView,
  DescriptionView,
  HowToText,
  NavigationButton,
  HowToTextHeader,
  BoldSpan,
  ExampleView,
} from "./styles";

export default function IntroScreen({ navigation }) {
  const themeResources = useContext(ThemeSelectsContext);
  const screenWidth = Dimensions.get("window").width - 20 + "px";

  return (
    <IntroScreenView>
      <StatusBar style="auto" />
      <HowToTextHeader>How To Play</HowToTextHeader>

      <DescriptionView width={screenWidth}>
        <HowToText>
          Guess the <BoldSpan>WORDLE</BoldSpan> in 6 tries.
        </HowToText>
        <HowToText>
          Each guess must be a valid 5 letter word. Hit the enter button to
          submit.
        </HowToText>
        <HowToText>
          After each guess, the color of the tiles will change to show how close
          your guess was to the word.
        </HowToText>
      </DescriptionView>

      <ExampleView width={screenWidth}>
        <HowToText>
          <BoldSpan>Examples</BoldSpan>
        </HowToText>
        <HowToText>
          The letter <BoldSpan>W</BoldSpan> is in the word and in the correct
          spot.
        </HowToText>
        <HowToText>
          The letter <BoldSpan>I</BoldSpan> is in the word but in the wrong
          spot.
        </HowToText>
        <HowToText>
          The letter <BoldSpan>U</BoldSpan> U is not in the word in any spot.
        </HowToText>
      </ExampleView>
      <NavigationButton
        title="Go to TabNavigation"
        onPress={() => navigation.navigate("TabNavigation")}
      />
    </IntroScreenView>
  );
}
