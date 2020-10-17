import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { Input } from "../Components/Form";

import Button from "./Button";

const LoginForm = () => {
  return (
    <View style={style.holder}>
      <Text style={style.label}>Email</Text>
      <Input icon="mail" placeholder="Enter your email" />
      <Text style={style.label}>Password</Text>
      <Input icon="lock" placeholder="Enter your password" />
      <View style={style.remember}>
        <Text style={[style.label, style.rememberText]}>Remember me</Text>
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
    fontSize: 20,
    fontWeight: "bold",
    opacity: 0.8,
    marginVertical: 16,
    marginLeft: 4,
  },
  remember: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rememberText: {
    marginTop: 24,
  },
  btn: {
    alignSelf: "center",
    marginTop: 24,
  },
});

export default LoginForm;
