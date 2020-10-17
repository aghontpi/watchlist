import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { PreHomeStackNavigationProps } from "../Components/Navigation";

const Login = (navigation: PreHomeStackNavigationProps<"Login">) => {
  return (
    <View style={style.holder}>
      <View style={style.titleHolder}>
        <Text style={style.title}>Welcome!</Text>
        <View style={style.subTitleHolder}>
          <Text style={style.subtitle}>Login with your account</Text>
        </View>
      </View>
      <View style={style.formHolder}>{}</View>
      <View style={style.footerHolder}>{}</View>
    </View>
  );
};

const style = StyleSheet.create({
  holder: {
    flex: 1,
  },
  titleHolder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  subTitleHolder: {
    marginTop: 8,
  },
  subtitle: {
    fontSize: 24,
    opacity: 0.3,
  },
  formHolder: {
    flex: 3,
  },
  footerHolder: {
    flex: 1,
  },
});

export default Login;
