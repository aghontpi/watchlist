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
  placeholder: string;
  active?: boolean;
  error?: boolean;
}

const ACTIVE_COLOR = "#1a73e8";
const ERROR_COLOR = "red";

const Input = ({ icon, placeholder, active, error, ...props }: InputProps) => {
  const iconColor = error ? ERROR_COLOR : active ? ACTIVE_COLOR : "#B2B2B2";
  const borderColor = error ? ERROR_COLOR : active ? ACTIVE_COLOR : "";

  return (
    <View
      style={[style.holder, active && [style.active, { ...{ borderColor } }]]}
    >
      <View style={style.content}>
        <View style={style.contentLayout}>
          <Icon name={icon} size={Size.l} color={iconColor} style={{}} />
          <TextInput
            style={style.text}
            placeholder={placeholder}
            placeholderTextColor={error ? ERROR_COLOR : "#A7A7A7"}
            underlineColorAndroid="transparent"
            autoCorrect={false}
            blurOnSubmit={false}
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
    flex: 1,
    padding: 0,
  },
  active: {
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: "solid",
  },
});

export default Input;
