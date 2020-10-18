import React from "react";
import { View, Text } from "react-native";

import { Input } from "../Components/Form";
import { PreHomeStackNavigationProps } from "../Components/Navigation";
import { Size } from "../Components/StyleConstants";

import { Button, Footer, Layout, Style, Terms } from "./Components";

const Registration = ({
  navigation,
}: PreHomeStackNavigationProps<"Registration">) => {
  return (
    <Layout
      header={{ title: "Let's Get Started", subTitle: "Singup to get Started" }}
      form={
        <View style={Style.holder}>
          <Text style={Style.label}>Email</Text>
          <Input icon="mail" placeholder="Enter your email" />
          <Text style={Style.label}>Password</Text>
          <Input icon="lock" placeholder="Enter your password" />
          <Text style={Style.label}>Confirm password</Text>
          <Input icon="lock" placeholder="Enter your password" />
          {/* override the margintop for registration */}
          <View style={[Style.btn, { marginTop: Size.xl + Size.xl }]}>
            <Button color="#5B70F3" label="Register" onPress={() => true} />
          </View>
        </View>
      }
      footer={
        <Footer
          socialIcons={false}
          terms={
            <Terms
              normal="Already have an account "
              bold="SignIn"
              onPress={() => navigation.goBack()}
            />
          }
        />
      }
    />
  );
};

export default Registration;
