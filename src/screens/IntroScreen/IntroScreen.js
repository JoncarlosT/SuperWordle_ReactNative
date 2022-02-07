import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function IntroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>This is IntoScreen!</Text>
      <StatusBar style="auto" />

      <Button
        title="Go to TabNavigation"
        onPress={() => navigation.navigate("TabNavigation")}
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
