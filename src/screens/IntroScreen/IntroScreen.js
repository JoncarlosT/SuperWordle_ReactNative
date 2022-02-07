import { StatusBar } from "expo-status-bar";
import { IntroScreenView, HowToText, NavigationButton } from "./styles";

export default function IntroScreen({ navigation }) {
  return (
    <IntroScreenView>
      <HowToText>This is IntoScreen!</HowToText>
      <StatusBar style="auto" />
      <NavigationButton
        title="Go to TabNavigation"
        onPress={() => navigation.navigate("TabNavigation")}
      />
    </IntroScreenView>
  );
}
