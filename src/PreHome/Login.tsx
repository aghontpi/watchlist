import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { PreHomeStackNavigationProps } from "../Components/Navigation";

import Footer from "./Footer";
import LoginForm from "./LoginForm";
import Terms from "./Terms";
export const MARGIN_HORIZONTAL = 24;

export const { width, height } = Dimensions.get("window");

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
                normal="Already have an account? "
                bold="SignIn"
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
    height: height,
    marginHorizontal: MARGIN_HORIZONTAL,
  },
  titleHolder: {
    flex: 1,
    justifyContent: "flex-end",
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
    flex: 2,
  },
  footerHolder: {
    flex: 1,
  },
});

export default Login;
