import { useFormik } from "formik";
import React from "react";
import { View, Text } from "react-native";
import * as Yup from "yup";

import { Input } from "../Components/Form";
import { PreHomeStackNavigationProps } from "../Components/Navigation";
import { Size } from "../Components/StyleConstants";

import { Button, Footer, Layout, Style, Terms } from "./Components";

const RegistrationValidation = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email")
    .required("email field should not be empty"),
  password: Yup.string().required("password filed should not be empty").min(8),
  confirmPassword: Yup.string()
    .required("required")
    .equals([Yup.ref("password")]),
});

const Registration = ({
  navigation,
}: PreHomeStackNavigationProps<"Registration">) => {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: { email: "", password: "", confirmPassword: "" },
    onSubmit: (fv) => console.log(fv),
    validationSchema: RegistrationValidation,
  });
  return (
    <Layout
      header={{ title: "Let's Get Started", subTitle: "Singup to get Started" }}
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
            secureTextEntry={true}
          />
          <Text style={Style.label}>Confirm password</Text>
          <Input
            icon="lock"
            placeholder="Re enter password"
            onChangeText={handleChange("confirmPassword")}
            onBlur={handleBlur("confirmPassword")}
            value={values.confirmPassword}
            error={errors.confirmPassword && errors.confirmPassword}
            active={touched.confirmPassword}
            secureTextEntry={true}
          />
          {/* override the margintop for registration */}
          <View style={[Style.btn, { marginTop: Size.xl + Size.xl }]}>
            <Button color="#5B70F3" label="Register" onPress={handleSubmit} />
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
