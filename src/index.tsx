import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { PreHome } from "./PreHome";
import { HomeDrawer } from "./Drawer";

const index = () => {
  // TODO: complete the registration and login part
  const signedIn = true;
  const mainContent = signedIn ? <HomeDrawer /> : <PreHome />;

  return <NavigationContainer>{mainContent}</NavigationContainer>;
};

export default index;
