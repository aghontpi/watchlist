import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import React from "react";

import ListView from "./ListView";
import MovieView from "./MovieView";

export type MovieSearchInfoParamList = {
  ListView: undefined;
  MovieView: undefined;
};

export interface MovieSearchInfoStackNavigationProps<
  RouteName extends keyof MovieSearchInfoParamList
> {
  navigation: StackNavigationProp<MovieSearchInfoParamList, RouteName>;
}

const stackNavigation = createStackNavigator<MovieSearchInfoParamList>();

const Search = () => {
  return (
    <stackNavigation.Navigator initialRouteName="ListView" headerMode="none">
      <stackNavigation.Screen name="ListView" component={ListView} />
      <stackNavigation.Screen name="MovieView" component={MovieView} />
    </stackNavigation.Navigator>
  );
};

export default Search;
