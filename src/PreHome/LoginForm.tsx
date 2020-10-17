import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { Input } from "../Components/Form";
import { FontType, Size } from "../Components/StyleConstants";

import Button from "./Components/Button";

const LoginForm = () => {
  return (
    <View style={style.holder}>
      <Text style={style.label}>Email</Text>
      <Input icon="mail" placeholder="Enter your email" />
      <Text style={style.label}>Password</Text>
      <Input icon="lock" placeholder="Enter your password" />
      <View style={style.remember}>
        <Text style={[style.label, style.rememberText]}>Remember me</Text>
        <Text style={[style.label, style.rememberText]}>Forgot password?</Text>
      </View>
      <View style={style.btn}>
        <Button color="#5B70F3" label="Login" onPress={() => true} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  holder: {
    flex: 1,
    justifyContent: "center",
  },
  label: {
    fontSize: FontType.heading2,
    fontWeight: "bold",
    opacity: 0.8,
    marginVertical: Size.m,
    marginLeft: 4,
  },
  remember: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Size.m,
  },
  rememberText: {
    marginTop: Size.l,
  },
  btn: {
    alignSelf: "center",
    marginTop: Size.l,
  },
});

export default LoginForm;
