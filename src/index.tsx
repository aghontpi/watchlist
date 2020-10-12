import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerNavigationParamList } from "./Components/Navigation";
import { Search } from "./Search";

const DrawerNavigation = createDrawerNavigator<DrawerNavigationParamList>();

const index = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation.Navigator initialRouteName="Search">
        <DrawerNavigation.Screen name="Search" component={Search} />
      </DrawerNavigation.Navigator>
    </NavigationContainer>
  );
};

export default index;
