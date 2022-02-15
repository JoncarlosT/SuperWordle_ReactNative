import { useContext } from "react";
import { Button } from "react-native";
import ThemeSelectsContext from "../../../theme";
import { IntroScreenView } from "./styles";

export default function IntroScreen({ navigation }) {
  const themeResources = useContext(ThemeSelectsContext);

  return (
    <IntroScreenView>
      <Button title="Game" onPress={() => navigation.navigate("GameScreen")} />
      <Button
        title="How To Play"
        onPress={() => navigation.navigate("HowToPlayScreen")}
      />
      <Button title="theme" onPress={themeResources.changeTheme} />
    </IntroScreenView>
  );
}
