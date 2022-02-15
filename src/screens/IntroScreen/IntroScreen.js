import { useContext } from "react";
import ThemeSelectsContext from "../../../theme";
import { IntroScreenView, ButtonStyled } from "./styles";

export default function IntroScreen({ navigation }) {
  const themeResources = useContext(ThemeSelectsContext);

  return (
    <IntroScreenView>
      <ButtonStyled
        title="Game"
        onPress={() => navigation.navigate("GameScreen")}
      />
      <ButtonStyled
        title="How To Play"
        onPress={() => navigation.navigate("HowToPlayScreen")}
      />
      <ButtonStyled title="theme" onPress={themeResources.changeTheme} />
    </IntroScreenView>
  );
}
