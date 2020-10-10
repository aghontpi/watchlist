import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ListView from "./ListView";
import MovieView from "./MovieView";
import { AfterLoginParamList } from "./Components/Navigation";
import { MovieInfoContextProvider } from "./Context";

const StackNavigation = createStackNavigator<AfterLoginParamList>();

const index = () => {
  return (
    <MovieInfoContextProvider>
      <NavigationContainer>
        <StackNavigation.Navigator headerMode="none">
          <StackNavigation.Screen name="MovieSearch" component={ListView} />
          <StackNavigation.Screen name="MovieView" component={MovieView} />
        </StackNavigation.Navigator>
      </NavigationContainer>
    </MovieInfoContextProvider>
  );
};

export default index;
