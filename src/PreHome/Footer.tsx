import React, { ReactNode } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import { GoogleIcon } from "../Components";

import Divider from "./Divider";

const { width } = Dimensions.get("window");

interface FooterProps {
  terms?: ReactNode;
}

const Footer = ({ terms }: FooterProps) => {
  return (
    <View style={style.holder}>
      <View style={style.dividerHolder}>
        <Divider color="#AEAEAE" text="Or" />
      </View>
      <View style={style.sso}>
        <View style={style.iconHolder}>
          <GoogleIcon size={24} />
        </View>
      </View>
      {terms && <View style={style.end}>{terms}</View>}
    </View>
  );
};

const style = StyleSheet.create({
  holder: {
    flex: 1,
    marginTop: 24,
  },
  dividerHolder: {
    alignSelf: "center",
    width: (width - 24 * 2) * 0.8,
  },
  sso: {
    alignSelf: "center",
    marginVertical: 24,
  },
  iconHolder: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    overflow: "hidden",
    backgroundColor: "#F4F4F4",
    alignItems: "center",
    justifyContent: "center",
  },
  end: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "flex-end",
  },
});

export default Footer;
