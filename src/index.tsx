import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  DrawerNavigationParamList,
  StackNavigationParamList,
} from "./Components/Navigation";
import { Search } from "./Search";
import Drawer from "./Drawer";
import { DRAWER_WIDTH } from "./Drawer/Drawer";
import { Login, Registration } from "./PreHome";

const DrawerNavigation = createDrawerNavigator<DrawerNavigationParamList>();
const StackNavigation = createStackNavigator<StackNavigationParamList>();

const index = () => {
  // TODO: complete the registration and login part
  const signedIn = false;
  const mainContent = signedIn ? (
    <DrawerNavigation.Navigator
      initialRouteName="Search"
      drawerContent={(props) => <Drawer {...props} />}
      drawerStyle={style.drawerStyle}
    >
      <DrawerNavigation.Screen name="Search" component={Search} />
    </DrawerNavigation.Navigator>
  ) : (
    <StackNavigation.Navigator headerMode="none">
      <StackNavigation.Screen name="Login" component={Login} />
      <StackNavigation.Screen name="Registration" component={Registration} />
    </StackNavigation.Navigator>
  );

  return <NavigationContainer>{mainContent}</NavigationContainer>;
};

const style = StyleSheet.create({
  drawerStyle: {
    width: DRAWER_WIDTH,
  },
});

export default index;
