import { StyleSheet, Text, View, LogBox } from "react-native";
import Board from "./UI/Board";
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <View style={styles.container}>
      <Board />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
});
