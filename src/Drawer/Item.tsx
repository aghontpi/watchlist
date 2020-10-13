import React, { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

interface ItemProps {
  name: string;
  icon: ReactNode;
}

const Item = ({ name, icon }: ItemProps) => {
  return (
    <RectButton style={style.container}>
      <View style={style.image}>{icon}</View>
      <Text style={style.name}>{name}</Text>
    </RectButton>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 24,
    height: 64,
    marginVertical: 8,
  },
  image: {
    marginRight: 40,
  },
  name: {
    fontSize: 20,
    letterSpacing: 0,
    fontFamily: "Sk-Modernist-Regular",
    color: "#080808",
  },
});

export default Item;
