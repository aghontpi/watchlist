import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
  },
  label: {
    fontSize: 16,
  },
  bold: {
    fontWeight: "bold",
  },
});

export default Terms;
