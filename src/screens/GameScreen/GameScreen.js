import { Text, Button } from "react-native";
import { GameScreenStyled, IntroScreenNavButton, HeaderView } from "./styles";

export default function GameScreen({ navigation }) {
  return (
    <GameScreenStyled>
      <HeaderView>
        <Text>Wordle</Text>
        <IntroScreenNavButton
          name="question"
          type="octicon"
          onPress={() => navigation.navigate("IntroScreen")}
        />
      </HeaderView>
    </GameScreenStyled>
  );
}
