import { useState } from "react";
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
  const [words, setWords] = useState(
    new Array(6).fill(null).map(() => Array(5).fill(" "))
  );
  const [wordRow, setWordRow] = useState(0);
  const [wordCol, setWordCol] = useState(0);

  const screenDimensions = Dimensions.get("window");
  const adjustedScreenWidth = screenDimensions.width - 20;

  const renderWords = (words) => {
    return words.map((word, idx) => {
      return (
        <WordleLetterView key={idx}>
          {word.map((letter, idx) => {
            return <WordleLetter key={idx}>{letter}</WordleLetter>;
          })}
        </WordleLetterView>
      );
    });
  };

  const fillInRow = (letter) => {
    words[wordRow][wordCol] = letter;
  };

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
      <WordleGameView width={adjustedScreenWidth}>
        {renderWords(words)}
      </WordleGameView>

      <Button title="Back" onPress={() => navigation.navigate("IntroScreen")} />
    </GameScreenStyled>
  );
}
