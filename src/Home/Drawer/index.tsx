import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";

import { Search } from "../Search";
import { DrawerNavigationParamList } from "../../Components/Navigation";
import { MyList } from "../MyList";
import { Friends } from "../Friends";

import Drawer, { DRAWER_WIDTH } from "./Drawer";

const DrawerNavigation = createDrawerNavigator<DrawerNavigationParamList>();

export const HomeDrawer = () => {
  return (
    <DrawerNavigation.Navigator
      initialRouteName="Search"
      drawerContent={(props) => <Drawer {...props} />}
      drawerStyle={style.drawerStyle}
    >
      <DrawerNavigation.Screen name="Search" component={Search} />
      <DrawerNavigation.Screen name="MyList" component={MyList} />
      <DrawerNavigation.Screen name="Friend" component={Friends} />
    </DrawerNavigation.Navigator>
  );
};

const style = StyleSheet.create({
  drawerStyle: {
    width: DRAWER_WIDTH,
  },
});
