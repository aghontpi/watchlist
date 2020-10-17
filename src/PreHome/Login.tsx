import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { PreHomeStackNavigationProps } from "../Components/Navigation";
import { FontType, Size, wHeight } from "../Components/StyleConstants";

import Footer from "./Components/Footer";
import Terms from "./Components/Terms";
import LoginForm from "./LoginForm";

const Login = (navigation: PreHomeStackNavigationProps<"Login">) => {
  return (
    <KeyboardAwareScrollView scrollEnabled={false}>
      <View style={style.holder}>
        <View style={style.titleHolder}>
          <Text style={style.title}>Welcome!</Text>
          <View style={style.subTitleHolder}>
            <Text style={style.subtitle}>Login with your account</Text>
          </View>
        </View>
        <View style={style.formHolder}>
          <LoginForm />
        </View>
        <View style={style.footerHolder}>
          <Footer
            terms={
              <Terms
                normal="New User? "
                bold="Register here"
                onPress={() => true}
              />
            }
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const style = StyleSheet.create({
  holder: {
    flex: 1,
    height: wHeight,
    marginHorizontal: Size.l,
  },
  titleHolder: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  title: {
    fontSize: FontType.heading,
    fontWeight: "bold",
  },
  subTitleHolder: {
    marginTop: Size.s,
  },
  subtitle: {
    fontSize: Size.l,
    opacity: 0.3,
  },
  formHolder: {
    flex: 2,
  },
  footerHolder: {
    flex: 1,
  },
});

export default Login;
