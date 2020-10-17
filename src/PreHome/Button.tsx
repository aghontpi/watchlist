import React from "react";
import { Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

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
    width: 320,
    height: 60,
    borderRadius: 24,
    justifyContent: "center",
  },
  label: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Button;
