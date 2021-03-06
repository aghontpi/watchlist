import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface TabbledViewProps {
  tabOne: ReactNode;
  tabTwo: ReactNode;
}

const TabbledView = ({ tabOne, tabTwo }: TabbledViewProps) => {
  return <View style={style.container}>{tabOne}</View>;
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default TabbledView;
