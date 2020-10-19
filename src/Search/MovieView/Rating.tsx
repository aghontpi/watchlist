import React, { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Size } from "../../Components/StyleConstants";

interface RatingProps {
  idbIcon: ReactNode;
  title: string;
  metaIcon: ReactNode;
}

const Rating = ({ idbIcon, title, metaIcon }: RatingProps) => {
  return (
    <View style={style.container}>
      <View>{idbIcon}</View>
      <Text style={{ fontSize: Size.m }}>{title}</Text>
      <View>{metaIcon}</View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default Rating;
