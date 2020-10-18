import React from "react";
import { View, Text } from "react-native";

import { Input } from "../Components/Form";
import { PreHomeStackNavigationProps } from "../Components/Navigation";

import { Button, Footer, Layout, Style, Terms } from "./Components";

const Login = ({ navigation }: PreHomeStackNavigationProps<"Login">) => (
  <Layout
    header={{ title: "Welcome!", subTitle: "Login with your account" }}
    form={
      <View style={Style.holder}>
        <Text style={Style.label}>Email</Text>
        <Input icon="mail" placeholder="Enter your email" />
        <Text style={Style.label}>Password</Text>
        <Input icon="lock" placeholder="Enter your password" />
        <View style={Style.remember}>
          <Text style={[Style.label, Style.rememberText]}>Remember me</Text>
          <Text style={[Style.label, Style.rememberText]}>
            Forgot password?
          </Text>
        </View>
        <View style={Style.btn}>
          <Button color="#5B70F3" label="Login" onPress={() => true} />
        </View>
      </View>
    }
    footer={
      <Footer
        socialIcons={true}
        terms={
          <Terms
            normal="New User? "
            bold="Register here"
            onPress={() => navigation.navigate("Registration")}
          />
        }
      />
    }
  />
);

export default Login;
