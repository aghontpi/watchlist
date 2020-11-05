import "react-native-gesture-handler";
import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";
import crashlytics from "@react-native-firebase/crashlytics";
import SplashScreen from "react-native-splash-screen";

import { UserInfoProvider, UserConext } from "./Context";
import { configureGoogle } from "./Authentication";
import { HomeDrawer } from "./Drawer";
import { PreHome } from "./PreHome";
import { LoginUser, LogoutUser } from "./Actions";

const AuthController = () => {
  const {
    state: { user },
    dispatch,
  } = useContext(UserConext);

  useEffect(() => {
    configureGoogle();
    crashlytics().log("App mounted.");
    return auth().onAuthStateChanged((userState) => {
      userState ? dispatch(LoginUser(userState)) : dispatch(LogoutUser());
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  SplashScreen.hide();
  return user ? <HomeDrawer /> : <PreHome />;
};

const Index = () => {
  return (
    <UserInfoProvider>
      <NavigationContainer>
        <AuthController />
      </NavigationContainer>
    </UserInfoProvider>
  );
};

export default Index;
