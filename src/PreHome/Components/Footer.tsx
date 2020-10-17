import React, { ReactNode } from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import { GoogleIcon } from "../../Components";
import { Size } from "../../Components/StyleConstants";

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
          <GoogleIcon size={Size.l} />
        </View>
      </View>
      {terms && <View style={style.end}>{terms}</View>}
    </View>
  );
};

const IconSize = 40;

const style = StyleSheet.create({
  holder: {
    flex: 1,
    marginTop: Size.l,
  },
  dividerHolder: {
    alignSelf: "center",
    width: (width - Size.l * 2) * 0.7,
  },
  sso: {
    alignSelf: "center",
    marginVertical: Size.l,
  },
  iconHolder: {
    width: IconSize,
    height: IconSize,
    borderRadius: IconSize / 2,
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
