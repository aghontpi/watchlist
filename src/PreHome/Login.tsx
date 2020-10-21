import { useFormik } from "formik";
import React from "react";
import { View, Text } from "react-native";
import * as Yup from "yup";

import { Input } from "../Components/Form";
import { PreHomeStackNavigationProps } from "../Components/Navigation";

import { Button, Footer, Layout, Style, Terms } from "./Components";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("invalid email")
    .required("email field is required"),
  password: Yup.string()
    .min(8, "password must be 8 characters long")
    .required("password field is required"),
});

const Login = ({ navigation }: PreHomeStackNavigationProps<"Login">) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (formValues) => console.log(formValues),
    validationSchema: LoginSchema,
  });

  return (
    <Layout
      header={{ title: "Welcome!", subTitle: "Login with your account" }}
      form={
        <View style={Style.holder}>
          <Text style={Style.label}>Email</Text>
          <Input
            icon="mail"
            placeholder="Enter your email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            error={errors.email && errors.email}
            active={touched.email}
          />
          <Text style={Style.label}>Password</Text>
          <Input
            icon="lock"
            placeholder="Enter your password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            error={errors.password && errors.password}
            active={touched.password}
          />
          <View style={Style.remember}>
            <Text style={[Style.label, Style.rememberText]}>Remember me</Text>
            <Text style={[Style.label, Style.rememberText]}>
              Forgot password?
            </Text>
          </View>
          <View style={Style.btn}>
            <Button color="#5B70F3" label="Login" onPress={handleSubmit} />
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
};

export default Login;
