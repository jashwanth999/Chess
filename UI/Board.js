import { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  PanResponder,
  useWindowDimensions,
} from "react-native";
import { coordB, coordW, pieces } from "../helpers/assetHelpers";

const WHITE = "rgb(100, 133, 68)";
const BLACK = "rgb(230, 233, 198)";

const rowPiecesList = [0, 7];

const panPiecesList = [1, 6];

const Square = ({ white, row, col, index }) => {
  const backgroundColor = white ? WHITE : BLACK;
  const color = white ? BLACK : WHITE;
  const textStyle = { fontWeight: "500", color: color };

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    })
  ).current;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor,
        padding: 0,
      }}
    >
      <Text
        style={[
          textStyle,
          { opacity: col === 0 ? 1 : 0, position: "absolute" },
        ]}
      >
        {"" + (8 - row)}
      </Text>

      {row === 7 && (
        <Text
          style={[
            textStyle,
            {
              alignSelf: "flex-end",
              position: "absolute",
              bottom: 0,
              right: 2,
            },
          ]}
        >
          {String.fromCharCode(97 + col)}
        </Text>
      )}
    </View>
  );
};

const Row = ({ white, row }) => {
  const offset = white ? 0 : 1;
  return (
    <View style={styles.container}>
      {Array(8)
        .fill(0)
        .map((index, i) => (
          <Square
            row={row}
            col={i}
            key={i}
            white={(i + offset) % 2 === 1}
            index={index}
          />
        ))}
    </View>
  );
};

export default function Board() {
  const { height, width } = useWindowDimensions();
  return (
    <View
      style={{
        height: width,
        width,
        position: "absolute",
      }}
    >
      {Array(8)
        .fill(0)
        .map((_, i) => (
          <Row key={i} white={i % 2 === 0} row={i} />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});
