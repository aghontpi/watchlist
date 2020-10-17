import React from "react";
import { View, StyleSheet, Dimensions, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Feather";

interface InputProps {
  icon: string;
  placeholder: string;
}

const { width } = Dimensions.get("window");
// TODO: move global constants seperately
const MARGIN_HORIZONTAL = 24;

const Input = ({ icon, placeholder }: InputProps) => {
  return (
    <View style={style.holder}>
      <View style={style.content}>
        <View style={style.contentLayout}>
          <Icon name={icon} size={28} color="#B2B2B2" />
          <TextInput
            style={style.text}
            placeholder={placeholder}
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  holder: {
    height: 80,
    width: width - MARGIN_HORIZONTAL * 2,
    borderRadius: 20,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    padding: 24,
    backgroundColor: "#E0E0E1",
  },
  contentLayout: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    marginHorizontal: 16,
    color: "#A7A7A7",
    fontSize: 16,
    flex: 1,
    padding: 0,
  },
});

export default Input;
