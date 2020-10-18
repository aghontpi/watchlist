import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { StackNavigationParamList } from "../Components/Navigation";

import Login from "./Login";
import Registration from "./Registration";

const StackNavigation = createStackNavigator<StackNavigationParamList>();

export const PreHome = () => (
  <StackNavigation.Navigator headerMode="none">
    <StackNavigation.Screen name="Login" component={Login} />
    <StackNavigation.Screen name="Registration" component={Registration} />
  </StackNavigation.Navigator>
);
