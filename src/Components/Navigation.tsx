/**
 * autocomplete and typechecking for navigation
 * https://reactnavigation.org/docs/typescript/
 */

import { DrawerNavigationProp as RNDrawerNavigationProp } from "@react-navigation/drawer";
import { StackNavigationProp } from "@react-navigation/stack";

export type DrawerNavigationParamList = {
  Search: undefined;
  WatchList: undefined;
  Favourite: undefined;
  Profile: undefined;
  People: undefined;
  settings: undefined;
  Logout: undefined;
};

export interface DrawerNavigationProp<
  T extends keyof DrawerNavigationParamList
> {
  navigation: RNDrawerNavigationProp<DrawerNavigationParamList, T>;
}

export type MovieSearchInfoParamList = {
  ListView: undefined;
  MovieView: undefined;
};

export interface MovieSearchInfoStackNavigationProps<
  T extends keyof MovieSearchInfoParamList
> {
  navigation: StackNavigationProp<MovieSearchInfoParamList, T>;
}

export type StackNavigationParamList = {
  Login: undefined;
  Registraton: undefined;
};

export interface PreHomeStackNavigationProps<
  T extends keyof StackNavigationParamList
> {
  navigation: StackNavigationProp<StackNavigationParamList, T>;
}
