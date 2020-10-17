import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Size } from "../../Components/StyleConstants";

interface DividerProps {
  text: string;
  color: string;
}

const Divider = ({ text, color }: DividerProps) => {
  const backgroundColor = {
    backgroundColor: color,
  };
  return (
    <View style={style.holder}>
      <View style={[style.line, { ...backgroundColor }]} />
      <View>
        <Text style={[style.text, { ...{ color } }]}>{text}</Text>
      </View>
      <View style={[style.line, { ...backgroundColor }]} />
    </View>
  );
};

const style = StyleSheet.create({
  holder: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    flex: 1,
    height: 1,
  },
  text: {
    width: 40,
    fontSize: Size.l,
    textAlign: "center",
  },
});

export default Divider;
