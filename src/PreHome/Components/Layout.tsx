import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { FontType, Size, wHeight } from "../../Components/StyleConstants";

interface HeaderPorps {
  title: string;
  subTitle: string;
}

interface LayoutProps {
  header: HeaderPorps;
  form: ReactNode;
  footer: ReactNode;
}

const Layout = ({
  header: { title: title, subTitle: subtitle },
  form,
  footer,
}: LayoutProps) => {
  return (
    <KeyboardAwareScrollView style={style.background}>
      <View style={style.holder}>
        <View style={style.titleHolder}>
          <Text style={style.title}>{title}</Text>
          <View style={style.subTitleHolder}>
            <Text style={style.subtitle}>{subtitle}</Text>
          </View>
        </View>
        <View style={style.formHolder}>{form}</View>
        <View style={style.footerHolder}>{footer}</View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const style = StyleSheet.create({
  background: {
    backgroundColor: "white",
  },
  holder: {
    flex: 1,
    height: wHeight,
    paddingHorizontal: Size.l,
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
    flexGrow: 4,
  },
  footerHolder: {
    flex: 1,
  },
});

export default Layout;
