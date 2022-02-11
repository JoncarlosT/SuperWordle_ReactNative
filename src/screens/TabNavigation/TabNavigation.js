import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function TabNavigation({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This Is TabNavigation</Text>

      <Button
        title="Go to IntroScreen"
        onPress={() => navigation.navigate("IntroScreen")}
      />
      <Button
        title="Go to GameScreen"
        onPress={() => navigation.navigate("GameScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
