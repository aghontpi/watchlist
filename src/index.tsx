import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";

import { DrawerNavigationParamList } from "./Components/Navigation";
import { Search } from "./Search";
import Drawer from "./Drawer";
import { DRAWER_WIDTH } from "./Drawer/Drawer";

const DrawerNavigation = createDrawerNavigator<DrawerNavigationParamList>();

const index = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation.Navigator
        initialRouteName="Search"
        drawerContent={(props) => <Drawer {...props} />}
        drawerStyle={style.drawerStyle}
      >
        <DrawerNavigation.Screen name="Search" component={Search} />
      </DrawerNavigation.Navigator>
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  drawerStyle: {
    width: DRAWER_WIDTH,
  },
});

export default index;
