import { Text, Button } from "react-native";
import { Dimensions } from "react-native";
import {
  GameScreenStyled,
  IntroScreenNavButton,
  HeaderView,
  WordleLetter,
  WordleLetterView,
  WordleGameView,
} from "./styles";

export default function GameScreen({ navigation }) {
  const screenHeight = Dimensions.get("window").height;
  const screenWidth = Dimensions.get("window").width - 20 + "px";

  return (
    <GameScreenStyled>
      <HeaderView>
        <Text>Wordle</Text>
        <IntroScreenNavButton
          name="question"
          type="octicon"
          onPress={() => navigation.navigate("HowToPlayScreen")}
        />
      </HeaderView>
      <WordleGameView width={screenWidth}>
        <WordleLetterView>
          <WordleLetter>J</WordleLetter>
          <WordleLetter>J</WordleLetter>
          <WordleLetter>J</WordleLetter>
          <WordleLetter>J</WordleLetter>
          <WordleLetter>J</WordleLetter>
        </WordleLetterView>
        <WordleLetterView>
          <WordleLetter>J</WordleLetter>
          <WordleLetter>J</WordleLetter>
          <WordleLetter>J</WordleLetter>
          <WordleLetter>J</WordleLetter>
          <WordleLetter>J</WordleLetter>
        </WordleLetterView>
        <WordleLetterView>
          <WordleLetter>J</WordleLetter>
          <WordleLetter>J</WordleLetter>
          <WordleLetter>J</WordleLetter>
          <WordleLetter>J</WordleLetter>
          <WordleLetter>J</WordleLetter>
        </WordleLetterView>
        <WordleLetterView>
          <WordleLetter>J</WordleLetter>
          <WordleLetter>J</WordleLetter>
          <WordleLetter>J</WordleLetter>
          <WordleLetter>J</WordleLetter>
          <WordleLetter>J</WordleLetter>
        </WordleLetterView>
        <WordleLetterView>
          <WordleLetter>J</WordleLetter>
          <WordleLetter>J</WordleLetter>
          <WordleLetter>J</WordleLetter>
          <WordleLetter>J</WordleLetter>
          <WordleLetter>J</WordleLetter>
        </WordleLetterView>
        <WordleLetterView>
          <WordleLetter>J</WordleLetter>
          <WordleLetter>J</WordleLetter>
          <WordleLetter>J</WordleLetter>
          <WordleLetter>J</WordleLetter>
          <WordleLetter>J</WordleLetter>
        </WordleLetterView>
      </WordleGameView>

      <Button title="Back" onPress={() => navigation.navigate("IntroScreen")} />
    </GameScreenStyled>
  );
}
