import React, { ReactNode } from "react";
import { View, Text } from "react-native";

interface RatingProps {
  idbIcon: ReactNode;
  title: string;
  metaIcon: ReactNode;
}

const Rating = ({ idbIcon, title, metaIcon }: RatingProps) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <View>{idbIcon}</View>
      <Text style={{ fontSize: 16 }}>{title}</Text>
      <View>{metaIcon}</View>
    </View>
  );
};

export default Rating;
