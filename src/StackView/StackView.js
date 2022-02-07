import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from "../screens/IntroScreen";
import TabNavigation from "../screens/TabNavigation";

const Stack = createNativeStackNavigator();

export default function StackView() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
    </Stack.Navigator>
  );
}
