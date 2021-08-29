import React from "react";
import { Text, View } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { Size } from "./StyleConstants";

interface ButtonProps {
  label: string;
  isActive?: boolean;
  onPress: () => void;
}

const WIDTH = Size.xl * 3;
const HEIGHT = Size.xl;

const Button = ({ label, isActive, onPress }: ButtonProps) => {
  const activeColor = "#1DA1F3";
  const textColor = "white";
  const colors = [activeColor, textColor];
  const [background, color] = isActive ? colors : colors.reverse();
  return (
    <View
      style={{
        borderWidth: isActive ? 0 : 1,
        borderColor: activeColor,
        borderRadius: WIDTH / 2,
        overflow: "hidden",
      }}
    >
      <RectButton
        onPress={onPress}
        style={{
          width: WIDTH,
          height: HEIGHT,
          backgroundColor: background,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color }}>{label}</Text>
      </RectButton>
    </View>
  );
};

Button.defaultProps = {
  isActive: false,
};

export default Button;
