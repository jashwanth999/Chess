import {
  StyleSheet,
  Text,
  View,
  LogBox,
  useWindowDimensions,
} from "react-native";
import Board from "./UI/Board";
import PieceBoard from "./UI/PieceBoard";
LogBox.ignoreAllLogs();

export default function App() {
  return (
    <View style={styles.container}>
      <Board />
      <PieceBoard />
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
