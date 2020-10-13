import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from "@react-navigation/drawer";
import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import {
  RoundedIcon,
  ChartIcon,
  FavouriteIcon,
  FriendsIcon,
  ProfileIcon,
  SearchIcon,
  SettingsIcon,
} from "../Components";

import Item from "./Item";
import User from "./User";

export const DRAWER_MARGIN_HORIZONTAL = 40;
const { width } = Dimensions.get("window");
export const DRAWER_WIDTH = width * 0.7;

const DrawerItems = [
  { name: "Search", component: "Search", icon: <SearchIcon /> },
  { name: "Your List", component: "Search", icon: <FavouriteIcon /> },
  { name: "Top 250", component: "Search", icon: <ChartIcon /> },
  { name: "Profile", component: "Search", icon: <ProfileIcon /> },
  { name: "Friend's List", component: "Search", icon: <FriendsIcon /> },
  { name: "Settings", component: "Search", icon: <SettingsIcon /> },
];

const Drawer = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
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
          size={48}
          iconRatio={0.4}
        />
      </View>
      <View style={style.itemsContainer}>
        <View style={style.drawerItems}>
          {DrawerItems.map((item) => (
            <Item key={item.name} {...item} />
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
        name="Aghont Pi"
        nick="Gopinath"
        profile="https://bluepie.in/images/me/avatar.jpg"
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: DRAWER_MARGIN_HORIZONTAL,
    paddingVertical: 40,
    justifyContent: "space-between",
  },
  appNameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  drawerItems: {},
  name: {
    flexDirection: "row",
  },
  appnameStart: {
    fontSize: 32,
    fontFamily: "Sk-Modernist-Bold",
  },
  appnameEnd: {
    fontSize: 32,
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
    borderRadius: 32,
    overflow: "hidden",
  },
  linearGradient: {
    paddingVertical: 24,
    paddingLeft: 32,
    justifyContent: "center",
  },
  statsText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
  subStatusText: {
    fontFamily: "Sk-Modernist-Regular",
    color: "#ffffff",
    opacity: 0.6,
    fontSize: 12,
    marginTop: 4,
  },
});

export default Drawer;
