import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { MovieSearchInfoParamList } from "../../Components/Navigation";
import { MovieInfoContextProvider } from "../../Context";

import ListView from "./ListView";
import MovieView from "./MovieView";

const stackNavigation = createStackNavigator<MovieSearchInfoParamList>();

const Search = () => {
  return (
    <MovieInfoContextProvider>
      <stackNavigation.Navigator initialRouteName="ListView" headerMode="none">
        <stackNavigation.Screen name="ListView" component={ListView} />
        <stackNavigation.Screen name="MovieView" component={MovieView} />
      </stackNavigation.Navigator>
    </MovieInfoContextProvider>
  );
};

export default Search;
