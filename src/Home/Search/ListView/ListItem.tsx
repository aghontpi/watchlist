import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { FontType, Size } from "../../../Components/StyleConstants";

import Rating from "./Components/Rating";

export interface ListItemProps {
  onPress: () => void;
  idbRating: string;
  rtRating?: string;
  title: string;
  cast: string[];
  poster: string;
  id: string;
}

const ListItem = ({
  onPress,
  idbRating,
  title,
  cast,
  poster,
}: ListItemProps) => {
  return (
    <RectButton {...{ onPress }} key={title} style={style.btn}>
      <View style={style.itemContainer}>
        <View style={style.imgContainer}>
          <ImageBackground
            source={
              poster
                ? { uri: poster }
                : { uri: "https://picsum.photos/172/172" }
            }
            style={style.ImageBackground}
            imageStyle={{ resizeMode: "cover" }}
          />
        </View>
        <View style={style.infoContainer}>
          <Rating heartOnPress={() => true} {...{ idbRating }} />
          <View>
            <Text style={style.title}>
              {title.length < 37 ? title : title.slice(0, 34) + ".."}
            </Text>
          </View>

          <View style={style.castHolder}>
            {cast &&
              cast.map((v, i) => (
                <Text key={v} style={style.castText}>
                  {i !== 0 && ", "}
                  {v}
                </Text>
              ))}
          </View>
        </View>
      </View>
    </RectButton>
  );
};

const style = StyleSheet.create({
  btn: {
    height: 204,
    flex: 1,
  },
  itemContainer: {
    paddingVertical: Size.m,
    flex: 1,
    flexDirection: "row",
    marginRight: Size.xl,
  },
  imgContainer: {
    borderTopRightRadius: Size.xxl,
    borderBottomRightRadius: Size.xxl,
    overflow: "hidden",
    width: 172,
    height: 172,
  },
  ImageBackground: { flex: 1, width: undefined, height: undefined },
  infoContainer: {
    marginLeft: Size.l,
    flexDirection: "column",
    flex: 1,
    overflow: "hidden",
  },
  title: {
    fontSize: FontType.heading1,
    fontWeight: "bold",
    marginTop: Size.s,
  },
  castHolder: { flexDirection: "row", marginTop: Size.s },
  castText: { fontSize: FontType.body, color: "#737599" },
});

export default ListItem;
