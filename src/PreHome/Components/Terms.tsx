import React from "react";
import { Text, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { Size } from "../../Components/StyleConstants";

interface TermsProps {
  onPress: () => void;
  normal: string;
  bold: string;
}

const Terms = ({ onPress, normal, bold }: TermsProps) => {
  return (
    <TouchableWithoutFeedback style={style.holder} {...{ onPress }}>
      <Text style={style.label}>{normal}</Text>
      <Text style={style.bold}>{bold}</Text>
    </TouchableWithoutFeedback>
  );
};

const style = StyleSheet.create({
  holder: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: Size.m,
    fontFamily: "SF-Pro-Display-Regular",
  },
  bold: {
    fontFamily: "SF-Pro-Display-Bold",
  },
});

export default Terms;
