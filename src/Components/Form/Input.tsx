import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { FontType, Size } from "../StyleConstants";

interface InputProps {
  icon: string;
  placeholder: string;
}

const { width } = Dimensions.get("window");

const Input = ({ icon, placeholder }: InputProps) => {
  return (
    <View style={style.holder}>
      <View style={style.content}>
        <View style={style.contentLayout}>
          <Icon name={icon} size={Size.l + 4} color="#B2B2B2" />
          <TextInput
            style={style.text}
            placeholder={placeholder}
            underlineColorAndroid="transparent"
            autoCorrect={false}
            blurOnSubmit={false}
            onSubmitEditing={() => Keyboard.dismiss()}
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  holder: {
    height: 80,
    width: width - Size.l * 2,
    borderRadius: Size.m + 2,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    padding: Size.l,
    backgroundColor: "#E0E0E1",
  },
  contentLayout: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    marginHorizontal: Size.m,
    color: "#A7A7A7",
    backgroundColor: "#E0E0E1",
    fontSize: FontType.body,
    flex: 1,
    padding: 0,
  },
});

export default Input;
