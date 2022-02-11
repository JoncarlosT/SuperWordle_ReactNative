import { useContext } from "react";
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
  WordleExampleView,
  WordleExampleLetter,
} from "./styles";

export default function IntroScreen({ navigation }) {
  const themeResources = useContext(ThemeSelectsContext);
  const screenHeight = Dimensions.get("window").height;
  const screenWidth = Dimensions.get("window").width - 20 + "px";

  return (
    <IntroScreenView height={screenHeight}>
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
        <WordleExampleView>
          <WordleExampleLetter color={themeResources.themeMode.letterCorrect}>
            W
          </WordleExampleLetter>
          <WordleExampleLetter>E</WordleExampleLetter>
          <WordleExampleLetter>A</WordleExampleLetter>
          <WordleExampleLetter>R</WordleExampleLetter>
          <WordleExampleLetter>Y</WordleExampleLetter>
        </WordleExampleView>
        <HowToText>
          The letter <BoldSpan>W</BoldSpan> is in the word and in the correct
          spot.
        </HowToText>
        <WordleExampleView>
          <WordleExampleLetter>P</WordleExampleLetter>
          <WordleExampleLetter color={themeResources.themeMode.letterInWord}>
            I
          </WordleExampleLetter>
          <WordleExampleLetter>L</WordleExampleLetter>
          <WordleExampleLetter>L</WordleExampleLetter>
          <WordleExampleLetter>S</WordleExampleLetter>
        </WordleExampleView>
        <HowToText>
          The letter <BoldSpan>I</BoldSpan> is in the word but in the wrong
          spot.
        </HowToText>
        <WordleExampleView>
          <WordleExampleLetter>V</WordleExampleLetter>
          <WordleExampleLetter>A</WordleExampleLetter>
          <WordleExampleLetter>G</WordleExampleLetter>
          <WordleExampleLetter color={themeResources.themeMode.letterNotInWord}>
            U
          </WordleExampleLetter>
          <WordleExampleLetter>E</WordleExampleLetter>
        </WordleExampleView>
        <HowToText>
          The letter <BoldSpan>U</BoldSpan> is not in the word in any spot.
        </HowToText>
      </ExampleView>
      <NavigationButton
        title="Go to TabNavigation"
        onPress={() => navigation.navigate("TabNavigation")}
      />
    </IntroScreenView>
  );
}
