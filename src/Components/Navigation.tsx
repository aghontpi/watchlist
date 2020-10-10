/**
 * navigation TypeChecking
 * refer https://reactnavigation.org/docs/typescript/
 */

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
