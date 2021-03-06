import React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { Size } from "../../Components/StyleConstants";

const SearchBox = () => {
  return (
    <View style={stylesheet.container}>
      <TextInput style={stylesheet.text} />
    </View>
  );
};

const stylesheet = StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
  },
  text: {
    backgroundColor: "#E7ECE0",
    color: "black",
    fontFamily: "SF-Pro-Display-Regular",
    height: Size.l * 3,
  },
});
export default SearchBox;
