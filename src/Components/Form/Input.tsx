/* eslint-disable no-nested-ternary */
import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TextInputProps,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { FontType, Size, wWidth } from "../StyleConstants";

interface InputProps extends TextInputProps {
  icon: string;
  active?: boolean;
  error?: string;
}

const ACTIVE_COLOR = "#1a73e8";
const ERROR_COLOR = "rgba(255,0,0,1)";
const NORMAL = "#B2B2B2";
const NORMAL_PLACEHOLDER = "#A7A7A7";

const Input = ({ icon, placeholder, active, error, ...props }: InputProps) => {
  const color = !active ? NORMAL : error ? ERROR_COLOR : ACTIVE_COLOR;

  return (
    <View style={[style.holder, { borderColor: color }]}>
      <View style={style.content}>
        <View style={style.contentLayout}>
          <Icon name={icon} size={Size.l} color={color} />
          <TextInput
            style={style.text}
            placeholder={placeholder}
            placeholderTextColor={
              active && error ? ERROR_COLOR : NORMAL_PLACEHOLDER
            }
            underlineColorAndroid="transparent"
            autoCorrect={false}
            onSubmitEditing={() => Keyboard.dismiss()}
            {...props}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  holder: {
    height: 80,
    width: wWidth - Size.l * 2,
    borderRadius: Size.m + 2,
    overflow: "hidden",
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: "solid",
  },
  content: {
    flex: 1,
    padding: Size.l,
    backgroundColor: "#F4F4F4",
  },
  contentLayout: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    marginHorizontal: Size.m,
    color: "black",
    backgroundColor: "#F4F4F4",
    fontSize: FontType.body,
    fontFamily: "SF-Pro-Display-Regular",
    flex: 1,
    padding: 0,
  },
});

export default Input;
