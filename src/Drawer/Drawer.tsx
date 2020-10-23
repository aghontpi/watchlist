import React, { ReactNode, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { logout } from "../Authentication";
import {
  RoundedIcon,
  ChartIcon,
  FavouriteIcon,
  FriendsIcon,
  ProfileIcon,
  SearchIcon,
} from "../Components";
import { BrokenLogout } from "../Components/CustomIcons";
import {
  DrawerNavigationParamList,
  DrawerProps,
} from "../Components/Navigation";
import { FontType, Size, wWidth } from "../Components/StyleConstants";
import { UserConext } from "../Context";

import Item from "./Item";
import User from "./User";

export const DRAWER_MARGIN_HORIZONTAL = Size.xxl;
export const DRAWER_WIDTH = wWidth * 0.7;

interface DrawerItems {
  name: string;
  component: keyof DrawerNavigationParamList;
  icon: ReactNode;
}

const DrawerItems: DrawerItems[] = [
  { name: "Search", component: "Search", icon: <SearchIcon /> },
  { name: "Your List", component: "Search", icon: <FavouriteIcon /> },
  { name: "Top 250", component: "Search", icon: <ChartIcon /> },
  { name: "Profile", component: "Search", icon: <ProfileIcon /> },
  { name: "Friend's List", component: "Search", icon: <FriendsIcon /> },
  //{ name: "Settings", component: "Search", icon: <SettingsIcon /> },
  { name: "Logout", component: "Logout", icon: <BrokenLogout /> },
];

const trimName = (str: string) => {
  return str.length > Size.m - 6 ? str.substring(0, Size.m - 6) + ".." : str;
};

const Drawer = ({ navigation }: DrawerProps) => {
  const itemOnPress = ({ component }: DrawerItems): (() => void) => {
    return () =>
      component === "Logout"
        ? logout().then(() => console.log("logout success"))
        : navigation.navigate(component);
  };
  const { state: userInfo } = useContext(UserConext);

  return (
    <View style={style.container}>
      <View style={style.appNameContainer}>
        <View style={style.name}>
          <Text style={style.appnameStart}>Watch</Text>
          <Text style={style.appnameEnd}> List</Text>
        </View>
        <RoundedIcon
          name="activity"
          backgroundColor="#1d28c9"
          color="white"
          onPress={() => true}
          size={Size.xxl + Size.s}
          iconRatio={0.4}
        />
      </View>
      <View style={style.itemsContainer}>
        <View>
          {DrawerItems.map((item) => (
            <Item key={item.name} onPress={itemOnPress(item)} {...item} />
          ))}
        </View>
        <View style={style.stats}>
          {/* <Text style={[style.appnameStart, { fontSize: 30 }]}>Stats</Text> */}
          <View style={style.statsChart}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#4c34d9", "#3130f0"]}
              style={style.linearGradient}
            >
              <Text style={[style.statsText]}>234 movies</Text>
              <Text style={style.subStatusText}>Watched</Text>
            </LinearGradient>
          </View>
        </View>
      </View>
      <User
        name={trimName(
          userInfo.user?.email ? userInfo.user.email : "unavailable"
        )}
        nick={
          userInfo.user?.displayName
            ? userInfo.user.displayName
            : "not available"
        }
        profile={
          userInfo.user?.photoURL
            ? userInfo.user.photoURL
            : "https://bluepie.in/images/me/avatar.jpg"
        }
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: DRAWER_MARGIN_HORIZONTAL,
    paddingVertical: Size.xxl,
    justifyContent: "space-between",
  },
  appNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    flexDirection: "row",
  },
  appnameStart: {
    fontSize: FontType.heading - 8,
    fontFamily: "Sk-Modernist-Bold",
  },
  appnameEnd: {
    fontSize: FontType.heading - 8,
    fontFamily: "Sk-Modernist-Regular",
  },
  itemsContainer: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  stats: {
    flex: 0.4,
    justifyContent: "flex-start",
  },
  statsChart: {
    borderRadius: Size.xl,
    overflow: "hidden",
  },
  linearGradient: {
    paddingVertical: Size.l,
    paddingLeft: Size.xl,
    justifyContent: "center",
  },
  statsText: {
    fontWeight: "bold",
    fontSize: FontType.heading1,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  subStatusText: {
    fontFamily: "Sk-Modernist-Regular",
    color: "#ffffff",
    opacity: 0.6,
    fontSize: FontType.body - 4,
    marginTop: Size.s - 4,
  },
});

export default Drawer;
