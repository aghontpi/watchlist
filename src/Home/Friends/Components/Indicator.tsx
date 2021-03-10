import React from "react";
import { StyleSheet } from "react-native";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

import { Size, wWidth } from "../../../Components/StyleConstants";

interface Indicator {
  style: ReturnType<typeof useAnimatedStyle>;
}
const Indicator = ({ style: animated }: Indicator) => {
  return (
    <Animated.View style={style.container}>
      <Animated.View style={[style.highlight, animated]} />
    </Animated.View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: Size.s,
  },
  highlight: {
    width: wWidth / 2,
    backgroundColor: "#1C9EEF",
    borderRadius: Size.s / 2,
  },
});

export default Indicator;
