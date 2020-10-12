import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ListView from "./ListView";
import MovieView from "./MovieView";
import {
  AfterLoginParamList,
  DrawerNavigationParamList,
} from "./Components/Navigation";
import { MovieInfoContextProvider } from "./Context";

const StackNavigation = createStackNavigator<AfterLoginParamList>();
const DrawerNavigation = createDrawerNavigator<DrawerNavigationParamList>();

const index = () => {
  return (
    <MovieInfoContextProvider>
      <NavigationContainer>
        <DrawerNavigation.Navigator initialRouteName="search">
          <DrawerNavigation.Screen name="search" component={ListView} />
        </DrawerNavigation.Navigator>
      </NavigationContainer>
    </MovieInfoContextProvider>
  );
};

export default index;
