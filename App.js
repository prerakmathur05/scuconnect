import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Amplify } from "aws-amplify";
import awsExports from "./src/aws-exports";
import {
  withAuthenticator,
  useAuthenticator,
} from "@aws-amplify/ui-react-native";

Amplify.configure(awsExports);

function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
export default withAuthenticator(App);
