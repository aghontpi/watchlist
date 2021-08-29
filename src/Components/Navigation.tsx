/**
 * autocomplete and typechecking for navigation
 * https://reactnavigation.org/docs/typescript/
 */

import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from "@react-navigation/drawer";
import { DrawerNavigationEventMap } from "@react-navigation/drawer/lib/typescript/src/types";
import { NavigationHelpers, ParamListBase } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type DrawerNavigationParamList = {
  Search: undefined;
  MyList: undefined;
  Favourite: undefined;
  Profile: undefined;
  Friend: undefined;
  settings: undefined;
  Logout: undefined;
};

export interface DrawerProps
  extends DrawerContentComponentProps<DrawerContentOptions> {
  navigation: NavigationHelpers<ParamListBase, DrawerNavigationEventMap>;
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

export type MyListParamList = {
  MyList: undefined;
  MovieView: undefined;
};

export interface MyListInfoStackNavigationProps<
  T extends keyof MyListParamList
> {
  navigation: StackNavigationProp<MyListParamList, T>;
}

export type StackNavigationParamList = {
  Login: undefined;
  Registration: undefined;
};

export interface PreHomeStackNavigationProps<
  T extends keyof StackNavigationParamList
> {
  navigation: StackNavigationProp<StackNavigationParamList, T>;
}
