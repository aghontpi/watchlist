import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { MyListParamList } from "../../Components/Navigation";
import { MovieInfoContextProvider } from "../../Context";
import MovieView from "../Search/MovieView";

import MyListView from "./MyListView/MyListView";

const stackNavigation = createStackNavigator<MyListParamList>();
const MyList = () => {
  return (
    <MovieInfoContextProvider>
      <stackNavigation.Navigator initialRouteName="MyList" headerMode="none">
        <stackNavigation.Screen name="MyList" component={MyListView} />
        <stackNavigation.Screen name="MovieView" component={MovieView} />
      </stackNavigation.Navigator>
    </MovieInfoContextProvider>
  );
};

export default MyList;
