import React from "react";
import { Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { FontType, Size } from "../../Components/StyleConstants";

interface ButtonProps {
  label: string;
  color: string;
  onPress: () => void;
}

const Button = ({ label, color, onPress }: ButtonProps) => {
  return (
    <RectButton
      style={[style.btn, { backgroundColor: color }]}
      {...{ onPress }}
    >
      <Text style={style.label}>{label}</Text>
    </RectButton>
  );
};

const style = StyleSheet.create({
  btn: {
    width: Size.s * (5 * 10),
    height: Size.s * 10 - 5,
    borderRadius: Size.l,
    justifyContent: "center",
  },
  label: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: FontType.body,
  },
});

export default Button;
