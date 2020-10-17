import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Size } from "../../Components/StyleConstants";

interface TermsProps {
  onPress: () => true;
  normal: string;
  bold: string;
}

const Terms = ({ onPress, normal, bold }: TermsProps) => {
  return (
    <View style={style.holder} {...{ onPress }}>
      <Text style={style.label}>{normal}</Text>
      <Text style={style.bold}>{bold}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  holder: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: Size.m,
  },
  bold: {
    fontWeight: "bold",
  },
});

export default Terms;
