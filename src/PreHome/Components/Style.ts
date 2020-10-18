import { StyleSheet } from "react-native";

import { FontType, Size } from "../../Components/StyleConstants";

const style = StyleSheet.create({
  holder: {
    flex: 1,
    justifyContent: "center",
  },
  label: {
    fontSize: FontType.heading2,
    fontWeight: "bold",
    opacity: 0.8,
    marginVertical: Size.m,
    marginLeft: 4,
  },
  remember: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: Size.m,
  },
  rememberText: {
    marginTop: Size.m,
  },
  btn: {
    alignSelf: "center",
    marginTop: Size.l,
  },
});

export default style;
