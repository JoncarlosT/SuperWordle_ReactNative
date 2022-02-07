import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function TabNavigation({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This Is TabNavigation</Text>
      <StatusBar style="auto" />

      <Button
        title="Go to IntroScreen"
        onPress={() => navigation.navigate("IntroScreen")}
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
