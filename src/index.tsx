import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerNavigationParamList } from "./Components/Navigation";
import { MovieInfoContextProvider } from "./Context";
import { Search } from "./Search";

const DrawerNavigation = createDrawerNavigator<DrawerNavigationParamList>();

const index = () => {
  return (
    <MovieInfoContextProvider>
      <NavigationContainer>
        <DrawerNavigation.Navigator initialRouteName="Search">
          <DrawerNavigation.Screen name="Search" component={Search} />
        </DrawerNavigation.Navigator>
      </NavigationContainer>
    </MovieInfoContextProvider>
  );
};

export default index;
