import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import { Size, wWidth } from "../../../Components/StyleConstants";

const Header = () => (
  <View style={style.container}>
    <TextInput style={style.input} />
  </View>
);

const style = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  input: {
    backgroundColor: "#E7ECF0",
    height: Size.xxl,
    width: wWidth - Size.xxl * 2,
    borderRadius: Size.xxl / 2,
    color: "black",
    fontFamily: "SF-Pro-Display-Regular",
  },
});

export default Header;
