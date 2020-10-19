import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";

import { PreHome } from "./PreHome";
import { HomeDrawer } from "./Drawer";
import { configureGoogle } from "./Authentication";

const Index = () => {
  // TODO: convert this to use contextApi
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    configureGoogle();
    const subscriber = auth().onAuthStateChanged((userState) => {
      setUser(userState);
      if (initializing) {
        setInitializing(false);
      }
    });
    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initializing) {
    return null;
  }

  const mainContent = user ? <HomeDrawer /> : <PreHome />;

  return <NavigationContainer>{mainContent}</NavigationContainer>;
};

export default Index;
