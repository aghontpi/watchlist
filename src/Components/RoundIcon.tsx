import React from "react";
import { StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";

export interface RoundedIconProps {
  name: string;
  color: string;
  backgroundColor: string;
  size: number;
  iconRatio: number;
  borderRadius?: number;
}

const RoundedIcon = ({
  name,
  color,
  backgroundColor,
  size,
  iconRatio,
  borderRadius,
}: RoundedIconProps) => {
  const styles = StyleSheet.create({
    container: {
      height: size,
      width: size,
      borderRadius: borderRadius !== 0 ? borderRadius : size / 2,
      justifyContent: "center",
      alignItems: "center",
      ...{ backgroundColor },
    },
  });
  const iconSize = size * iconRatio;
  return (
    <RectButton style={styles.container}>
      <Text {...{ color }}>
        <Icon size={iconSize} {...{ name, color }} />
      </Text>
    </RectButton>
  );
};

RoundedIcon.defaultProps = {
  iconRatio: 0.7,
  borderRadius: 0,
};

export default RoundedIcon;
