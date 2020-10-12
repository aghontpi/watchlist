/**
 * navigation TypeChecking
 * refer https://reactnavigation.org/docs/typescript/
 */

import { DrawerNavigationProp as RNDrawerNavigationProp } from "@react-navigation/drawer";
import { StackNavigationProp } from "@react-navigation/stack";

export type AfterLoginParamList = {
  MovieSearch: undefined;
  MovieView: undefined;
};

export interface AfterLoginNavigationProp<
  RouteName extends keyof AfterLoginParamList
> {
  navigation: StackNavigationProp<AfterLoginParamList, RouteName>;
}

export type DrawerNavigationParamList = {
  search: undefined;
  watchList: undefined;
  favourite: undefined;
  profile: undefined;
  people: undefined;
  settings: undefined;
  logout: undefined;
};

export interface DrawerNavigationProp<
  RouteName extends keyof DrawerNavigationParamList
> {
  navigation: RNDrawerNavigationProp<DrawerNavigationParamList, RouteName>;
}
