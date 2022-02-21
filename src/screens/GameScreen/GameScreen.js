import { useState, useEffect } from "react";
import OnScreenKeyboard from "../../components/OnScreenKeyboard";
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

  useEffect(() => {
    renderWords(words);
  }, [wordRow, wordCol]);

  const fillInLetter = (letter) => {
    words[wordRow][wordCol] = letter;
  };

  const setKeyBoardInput = (key) => {
    if (key === "ENTER") {
    } else if (key === "←") {
      if (wordCol === 5) words[wordRow].pop();
      fillInLetter(" ");
      setWordCol(wordCol - 1);
    } else {
      if (wordCol <= 4) {
        fillInLetter(key);
        setWordCol(wordCol + 1);
      }
    }

    console.log(words[wordRow]);
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

      <OnScreenKeyboard setKeyBoardInput={setKeyBoardInput} />

      <Button title="Back" onPress={() => navigation.navigate("IntroScreen")} />
    </GameScreenStyled>
  );
}
