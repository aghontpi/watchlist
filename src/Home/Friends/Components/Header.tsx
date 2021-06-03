import React, { useEffect, useRef } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Icons from "react-native-vector-icons/Feather";

import { Size, wWidth } from "../../../Components/StyleConstants";

interface HeaderProps {
  search: (query: string) => void;
}

const Header = ({ search }: HeaderProps) => {
  const ref = useRef<TextInput>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <View style={style.container}>
      <Icons name="arrow-left" size={Size.l} color="#229FE8" />
      <TextInput
        ref={ref}
        style={style.input}
        onSubmitEditing={({ nativeEvent: { text } }) => search(text)}
        autoFocus
      />
      <Icons name="more-vertical" size={Size.l} color="#229FE8" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: Size.s,
    flexDirection: "row",
    paddingHorizontal: Size.m,
  },
  input: {
    backgroundColor: "#E7ECF0",
    height: Size.xxl,
    width: wWidth - Size.xxl * 3,
    borderRadius: Size.xxl / 2,
    color: "black",
    fontFamily: "SF-Pro-Display-Regular",
    paddingHorizontal: Size.l,
  },
});

export default Header;
